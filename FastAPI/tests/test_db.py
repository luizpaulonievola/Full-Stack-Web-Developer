from sqlalchemy import select

from fast_zero.models import User


def test_create_user(session):
    user = User(
        username='Luiz Paulo Nievola',
        password='secret12/',
        email='luizpaulo@gmail.com',
    )
    session.add(user)
    session.commit()

    result = session.scalar(
        select(User).where(User.username == 'Luiz Paulo Nievola')
    )

    assert result.username == 'Luiz Paulo Nievola'
