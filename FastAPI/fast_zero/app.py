"""Módulo principal da aplicação FastAPI.

Este módulo inicializa a aplicação FastAPI e inclui os roteadores
para os endpoints de autenticação e de usuários.
"""

from http import HTTPStatus

from fastapi import FastAPI

from fast_zero.routers import auth, users
from fast_zero.schemas import Message

app = FastAPI()

app.include_router(users.router)
app.include_router(auth.router)

# HTTPStatus.CREATED      # 201
# HTTPStatus.NOT_FOUND    # 404
# HTTPStatus.BAD_REQUEST  # 400
# EndPoint


@app.get('/', status_code=HTTPStatus.OK, response_model=Message)
def read_root():
    """Retorna uma mensagem de olá no endpoint raiz.

    Este endpoint serve como uma verificação de que a API está
    funcionando corretamente.

    Returns:
        dict: Um dicionário com uma mensagem de saudação.
    """
    return {'message': 'Berserk é o melhor mangá do mundo!'}
