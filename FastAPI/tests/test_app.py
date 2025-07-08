from http import HTTPStatus

from fast_zero.schemas import UserPublic


def test_read_root_success_and_hello_world(client):
    response = client.get('/')  # Act (Ação)

    assert response.status_code == HTTPStatus.OK  # Assert (Verificação)
    assert response.json() == {
        'message': 'Berserk é o melhor mangá do mundo!'
    }


def test_create_user(client, user):
    response = client.post(  # UserSchema
        '/users/',
        json={
            'username': 'test_user',
            'password': 'password',
            'email': 'test@test.com',
        },
    )

    # Voltou o status code correto?
    assert response.status_code == HTTPStatus.CREATED
    # Validar UserPubli
    assert response.json() == {
        'username': 'test_user',
        'email': 'test@test.com',
        'id': 1,
    }


def test_read_user(client):
    response = client.get('/users/')

    assert response.status_code == HTTPStatus.OK
    assert response.json() == {'users': []}


def test_read_user_with_user(client, user):
    user_schema = UserPublic.model_validate(user).model_dump()

    response = client.get('/users/')

    assert response.status_code == HTTPStatus.OK
    assert response.json() == {
        'users': [
            # UserPublic
            user_schema,
        ]
    }


def test_update_user(client, user):
    response = client.put(
        '/users/1',
        json={
            'username': 'test_user_2',
            'email': 'test@test.com',
            'password': '123456',
        },
    )
    assert response.status_code == HTTPStatus.OK
    assert response.json() == {
        'username': 'test_user_2',
        'email': 'test@test.com',
        'id': 1,
    }


def test_delete_user(client, user):
    response = client.delete('/users/1')

    assert response.status_code == HTTPStatus.OK
    assert response.json() == {'message': 'User deleted'}
