FROM python:3.9-slim

RUN apt-get update -y \
    && apt-get install -y --no-install-recommends \
       python3-dev \
       build-essential \
       pkg-config \
       libmariadb-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN pip install --upgrade pip
RUN pip install Flask requests Flask-MySQLdb

COPY . .

EXPOSE 5000

CMD ["python", "./app.py"]
