from http import HTTPStatus

from fastapi.testclient import TestClient

from fast_zero.app import app


def test_read_root_success_and_hello_world():
    client = TestClient(app)  # Arrange (Organização)

    resp = client.get('/')  # Act (Ação)

    assert resp.status_code == HTTPStatus.OK  # Assert (Verificação)
    assert resp.json() == {'message': 'Berserk é o melhor mangá do mundo!'}
