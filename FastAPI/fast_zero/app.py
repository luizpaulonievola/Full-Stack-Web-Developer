from http import HTTPStatus  # Substituir numeros

from fastapi import FastAPI, HTTPException

# HTTPStatus.CREATED      # 201
# HTTPStatus.NOT_FOUND    # 404
# HTTPStatus.BAD_REQUEST  # 400
from fast_zero.schemas import (
    Message,
    UserDB,
    UserList,
    UserPublic,
    UserShema,
)

app = FastAPI()

database = []


@app.get('/', status_code=HTTPStatus.OK, response_model=Message)
def read_root():
    return {'message': 'Berserk é o melhor mangá do mundo!'}


@app.post(
    '/users/', status_code=HTTPStatus.CREATED, response_model=UserPublic
)
def create_user(user: UserShema):
    # breakpoint()

    user_with_id = UserDB(id=len(database) + 1, **user.model_dump())
    database.append(user_with_id)

    return user_with_id


@app.get('/users/', response_model=UserList)
def read_user():
    return {'users': database}


@app.put('/users/{user_id}', response_model=UserPublic)
def update_user(user_id: int, user: UserShema):
    if user_id < 1 or user_id > len(database):
        # Levantar erro para o cliente com raise
        raise HTTPException(
            status_code=HTTPStatus.NOT_FOUND,
            detail='User not found',
        )

    user_with_id = UserDB(id=user_id, **user.model_dump())
    database[user_id - 1] = user_with_id

    return user_with_id


@app.delete('/users/{user_id}', response_model=Message)
def delete_user(user_id: int):
    if user_id < 1 or user_id > len(database):
        # Levantar erro para o cliente com raise
        raise HTTPException(
            status_code=HTTPStatus.NOT_FOUND,
            detail='User not found',
        )

    del database[user_id - 1]

    return {'message': 'User deleted'}
