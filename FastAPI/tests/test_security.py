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


def test_get_current_user_missing_sub_in_token(client, user):
    """
    Testa se a exceção de credenciais é lançada quando o token
    não contém o campo 'sub' (subject).
    """
    # Arrange: Cria um token sem o campo 'sub'
    token = create_access_token(data={'other_field': 'test'})
    # O padrão JWT diz que 'sub' (subject, ou "sujeito") é o identificador
    # do usuário. Sem ele, a API não sabe para quem o token foi emitido.

    # Act: Tenta acessar uma rota protegida com este token
    response = client.delete(
        f'/users/{user.id}',
        headers={'Authorization': f'Bearer {token}'},
    )

    # Assert: Verifica se a resposta é 401 Unauthorized
    assert response.status_code == HTTPStatus.UNAUTHORIZED
    assert response.json() == {'detail': 'Could not validate credentials'}


def test_get_current_user_with_nonexistent_user(client, user):
    """
    Testa se a exceção de credenciais é lançada quando o 'sub' do token
    se refere a um usuário que não existe no banco de dados.
    """
    # Arrange: Cria um token para um email que não está no banco
    token = create_access_token(data={'sub': 'nonexistent@user.com'})

    # Act: Tenta acessar uma rota protegida com este token
    response = client.delete(
        f'/users/{user.id}',
        headers={'Authorization': f'Bearer {token}'},
    )

    # Assert: Verifica se a resposta é 401 Unauthorized
    assert response.status_code == HTTPStatus.UNAUTHORIZED
    assert response.json() == {'detail': 'Could not validate credentials'}
