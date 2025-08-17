from http import HTTPStatus

from jwt import decode

from fast_zero.security import create_access_token, settings


def test_jwt():  # Toda função precisa iniciar com test
    data = {'sub': 'test@test.com'}
    token = create_access_token(data)

    decoded = decode(
        token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM]
    )

    assert decoded['sub'] == data['sub']
    assert decoded['exp']  # testa o valor de exp se ele existe


def test_jwt_invalid_token(client):
    response = client.delete(
        '/users/1',
        headers={'Authorization': 'Bearer invalid_token'},
    )

    assert response.status_code == HTTPStatus.UNAUTHORIZED
    assert response.json() == {'detail': 'Could not validate credentials'}
