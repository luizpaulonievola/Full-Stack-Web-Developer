from http import HTTPStatus  # Substituir numeros

from fastapi import Depends, FastAPI, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy import select
from sqlalchemy.orm import Session

from fast_zero.database import get_session
from fast_zero.models import User

# HTTPStatus.CREATED      # 201
# HTTPStatus.NOT_FOUND    # 404
# HTTPStatus.BAD_REQUEST  # 400
from fast_zero.schemas import (
    Message,
    Token,
    UserList,
    UserPublic,
    UserShema,
)
from fast_zero.security import (
    create_access_token,
    get_current_user,
    get_password_hash,
    verify_password,
)

app = FastAPI()


# EndPoint
@app.get('/', status_code=HTTPStatus.OK, response_model=Message)
def read_root():
    return {'message': 'Berserk é o melhor mangá do mundo!'}


@app.post(
    '/users/', status_code=HTTPStatus.CREATED, response_model=UserPublic
)
def create_user(
    user: UserShema,
    session: Session = Depends(get_session),
    # current_user: User = Depends(get_current_user),
):
    db_user = session.scalar(
        select(User).where(
            (User.username == user.username) | (User.email == user.email)
        )
    )

    if db_user:
        if db_user.username == user.username:
            raise HTTPException(
                status_code=HTTPStatus.BAD_REQUEST,
                detail='Username already registered',
            )
        elif db_user.email == user.email:
            raise HTTPException(
                status_code=HTTPStatus.BAD_REQUEST,
                detail='Email already registered',
            )
        # 1. Cria o objeto User (apenas na memória)
    db_user = User(
        username=user.username,
        password=get_password_hash(user.password),  # Cria o hash
        email=user.email,
    )

    # 2. Marca para persistência (mas não executa ainda)
    session.add(db_user)
    # 3. Executa o INSERT no banco e confirma
    session.commit()
    # 4. Recarrega o objeto do banco (útil para pegar ID gerado,
    # timestamps,
    # etc)
    session.refresh(db_user)

    return db_user


@app.get('/users/', response_model=UserList)
def read_users(
    skip: int = 0,
    limit: int = 10,
    session: Session = Depends(get_session),
):
    users = session.scalars(select(User).offset(skip).limit(limit)).all()
    return {'users': users}


@app.put('/users/{user_id}', response_model=UserPublic)
def update_user(
    user_id: int,
    user: UserShema,
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user),
):
    if current_user.id != user_id:
        raise HTTPException(
            status_code=HTTPStatus.FORBIDDEN,
            detail='Not enough permissions',
        )

    current_user.username = user.username
    current_user.email = user.email
    current_user.password = get_password_hash(user.password)

    session.commit()
    session.refresh(current_user)

    return current_user


@app.delete('/users/{user_id}', response_model=Message)
def delete_user(
    user_id: int,
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user),
):
    if current_user.id != user_id:
        raise HTTPException(
            status_code=HTTPStatus.FORBIDDEN,
            detail='Not enough permissions',
        )

    session.delete(current_user)
    session.commit()

    return {'message': 'User deleted'}


@app.post('/token', response_model=Token)
# Post pois vai ser enviado dados
def login_for_acess_token(
    form_data: OAuth2PasswordRequestForm = Depends(),
    session: Session = Depends(get_session),
):
    user = session.scalar(
        select(User).where(
            (User.username == form_data.username)
            | (User.email == form_data.username)
        )
    )

    if not user or not verify_password(form_data.password, user.password):
        raise HTTPException(
            status_code=HTTPStatus.UNAUTHORIZED,
            detail='Incorrect username or password',
        )

    access_token = create_access_token(data={'sub': user.email})

    return {'access_token': access_token, 'token_type': 'Bearer'}
