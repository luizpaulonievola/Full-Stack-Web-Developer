from http import HTTPStatus  # Substituir numeros

# HTTPStatus.CREATED      # 201
# HTTPStatus.NOT_FOUND    # 404
# HTTPStatus.BAD_REQUEST  # 400
from fastapi import FastAPI

from fast_zero.schemas import Message

app = FastAPI()


@app.get('/', status_code=HTTPStatus.OK, response_model=Message)
def read_root():
    return {'message': 'Berserk é o melhor mangá do mundo!'}
