from http import HTTPStatus


def test_read_root_success_and_hello_world(client):
    response = client.get('/')  # Act (Ação)

    assert response.status_code == HTTPStatus.OK  # Assert (Verificação)
    assert response.json() == {'message': 'Berserk é o melhor mangá do mundo!'}
