from datetime import datetime, timedelta
from http import HTTPStatus
from zoneinfo import ZoneInfo

from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from jwt import DecodeError, decode, encode
from pwdlib import PasswordHash
from sqlalchemy import select
from sqlalchemy.orm import Session

from fast_zero.database import get_session
from fast_zero.models import User
from fast_zero.settings import Settings

settings = Settings()

ph = PasswordHash.recommended()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl='auth/token')


def create_access_token(data: dict):
    """
    Cria um token de acesso JWT.

    Args:
        data: Dados a serem codificados no token.

    Returns:
        O token de acesso JWT codificado.
    """
    to_encode = data.copy()

    # Define o tempo de expiração do token
    expire = datetime.now(tz=ZoneInfo('UTC')) + timedelta(
        minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES
    )

    to_encode.update({'exp': expire})

    # Codifica o token com a chave secreta e o algoritmo definidos
    encoded_jwt = encode(
        to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM
    )

    return encoded_jwt


def get_password_hash(password: str):
    """
    Gera o hash de uma senha.

    Args:
        password: A senha a ser hasheada.

    Returns:
        O hash da senha.
    """
    return ph.hash(password)


def verify_password(plain_password, hashed_password):
    """
    Verifica se uma senha corresponde ao seu hash.

    Args:
        plain_password: A senha em texto plano.
        hashed_password: O hash da senha.

    Returns:
        True se a senha corresponder ao hash, False caso contrário.
    """
    return ph.verify(plain_password, hashed_password)


def get_current_user(
    session: Session = Depends(get_session),
    token: str = Depends(oauth2_scheme),
):
    """
    Obtém o usuário atual a partir de um token de acesso JWT.

    Args:
        session: A sessão do banco de dados.
        token: O token de acesso JWT.

    Returns:
        O usuário correspondente ao token.

    Raises:
        HTTPException: Se o token for inválido
        ou o usuário não for encontrado.
    """
    credentials_exception = HTTPException(
        status_code=HTTPStatus.UNAUTHORIZED,
        detail='Could not validate credentials',
        headers={'WWW-Authenticate': 'Bearer'},
    )

    try:
        # Decodifica o token para obter o payload
        payload = decode(
            token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM]
        )
        subject_email = payload.get('sub')

        if not subject_email:
            raise credentials_exception

    except DecodeError:
        raise credentials_exception

    # Busca o usuário no banco de dados com base no e-mail do token
    user = session.scalar(select(User).where(User.email == subject_email))

    if not user:
        raise credentials_exception

    return user
