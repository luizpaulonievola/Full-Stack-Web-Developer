from sqlalchemy import select

from fast_zero.models import User


def test_create_user(session):
    user = User(
        username='test_user',
        password='password',
        email='test@test.com',
    )
    session.add(user)
    session.commit()

    result = session.scalar(select(User).where(User.username == 'test_user'))

    assert result.username == 'test_user'
