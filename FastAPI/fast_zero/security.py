from pwdlib import PasswordHash

ph = PasswordHash.recommended()


def get_password_hash(password: str):
    return ph.hash(password)


def verify_password(plain_password, hashed_password):
    return ph.verify(plain_password, hashed_password)
