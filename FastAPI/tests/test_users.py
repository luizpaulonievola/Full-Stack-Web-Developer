"""Este módulo contém os testes para os endpoints de usuários."""

from http import HTTPStatus

from fast_zero.schemas import UserPublic
from fast_zero.security import create_access_token


def test_create_user(client):
    """Testa a criação de um novo usuário.

    Args:
        client: O cliente de teste.
    """
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


def test_create_if_user_already_exists(client):
    client.post(
        '/users/',
        json={
            'username': 'test_user',
            'password': 'password',
            'email': 'test@test.com',
        },
    )
    response = client.post(  # UserSchema
        '/users/',
        json={
            'username': 'test_user',
            'password': 'password123',
            'email': 'test_user@test.com',
        },
    )

    assert response.status_code == HTTPStatus.CONFLICT
    assert response.json() == {'detail': 'Username already exists'}


def test_create_if_email_already_exists(client):
    client.post(
        '/users/',
        json={
            'username': 'test_user_email',
            'password': 'password',
            'email': 'test@test.com',
        },
    )
    response = client.post(  # UserSchema
        '/users/',
        json={
            'username': 'test_user_2',
            'password': 'password',
            'email': 'test@test.com',
        },
    )

    assert response.status_code == HTTPStatus.CONFLICT
    assert response.json() == {'detail': 'Email already exists'}


def test_read_user(client):
    """Testa a leitura de usuários quando
    não há usuários no banco de dados.

    Args:
        client: O cliente de teste.
    """

    response = client.get('/users')
    assert response.status_code == HTTPStatus.OK
    assert response.json() == {'users': []}


def test_read_user_with_user(client, user):
    """Testa a leitura de usuários quando há um usuário no banco de dados.

    Args:
        client: O cliente de teste.
        user: O fixture de usuário.
    """
    user_schema = UserPublic.model_validate(user).model_dump()
    token = create_access_token({'sub': user.email})

    response = client.get(
        '/users/', headers={'Authorization': f'Bearer {token}'}
    )

    assert response.status_code == HTTPStatus.OK
    assert response.json() == {
        'users': [
            # UserPublic
            user_schema,
        ]
    }


def test_update_user(client, user, token):
    """Testa a atualização de um usuário existente.

    Args:
        client: O cliente de teste.
        user: O fixture de usuário.
        token: O token de autenticação.
    """
    response = client.put(
        f'/users/{user.id}',
        headers={'Authorization': f'Bearer {token}'},
        json={
            'username': 'test_user_2',
            'email': 'test2@test.com',
            'password': '123456',
            'id': user.id,
        },
    )
    assert response.status_code == HTTPStatus.OK
    assert response.json() == {
        'username': 'test_user_2',
        'email': 'test2@test.com',
        'id': user.id,
    }


def test_update_user_by_another_user(client, user):
    """
    Testa se um usuário não pode atualizar os dados de outro usuário.

    Garante que a API retorne um erro 403 Forbidden.
    """
    # Cria um segundo usuário (o "atacante")
    attacker_data = {
        'username': 'attacker',
        'password': 'password123',
        'email': 'attacker@test.com',
    }
    response_create = client.post('/users/', json=attacker_data)

    assert response_create.status_code == HTTPStatus.CREATED

    response_login = client.post(
        '/auth/token',
        data={
            'username': attacker_data['email'],
            'password': attacker_data['password'],
        },
    )

    assert response_login.status_code == HTTPStatus.OK

    attacker_token = response_login.json()['access_token']

    response = client.put(
        f'/users/{user.id}',
        headers={'Authorization': f'Bearer {attacker_token}'},
        json={
            'username': 'hacked_user',
            'email': 'hacked@test.com',
            'password': 'new_password',
        },
    )

    assert response.status_code == HTTPStatus.FORBIDDEN
    assert response.json() == {'detail': 'Not enough permissions'}


def test_delete_user(client, user, token):
    """Testa a exclusão de um usuário existente.

    Args:
        client: O cliente de teste.
        user: O fixture de usuário.
        token: O token de autenticação.
    """
    response = client.delete(
        f'/users/{user.id}',
        headers={'Authorization': f'Bearer {token}'},
    )

    assert response.status_code == HTTPStatus.OK
    assert response.json() == {'message': 'User deleted'}
