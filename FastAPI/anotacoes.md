# Criando com Poetry; sempre usar letras ou underline
# Poetry é uma ferramenta para gerenciamento de dependências e empacotamento de projetos Python

❯ poetry new fast_zero
Created package fast_zero in fast_zero

❯ tree
.
├── anotacoes.md
└── fast_zero
    ├── README.md
    ├── pyproject.toml
    ├── src
    │   └── fast_zero
    │       └── __init__.py
    └── tests
        └── __init__.py

5 directories, 5 files


Note: requires-python = "3.12.*" manter para atualizaçoes do 3.12.

❯ poetry install
Creating virtualenv fast-zero-HWXYPAEY-py3.12 in /home/ubuntu/.cache/pypoetry/virtualenvs
Updating dependencies
Resolving dependencies... (0.1s)

Writing lock file

Installing the current project: fast-zero (0.1.0)

# Instalar fastapi
❯ poetry add fastapi
Using version ^0.115.12 for fastapi

Updating dependencies
Resolving dependencies... (1.1s)

Package operations: 10 installs, 0 updates, 0 removals

  - Installing idna (3.10)
  - Installing sniffio (1.3.1)
  - Installing typing-extensions (4.14.0)
  - Installing annotated-types (0.7.0)
  - Installing anyio (4.9.0)
  - Installing pydantic-core (2.33.2)
  - Installing typing-inspection (0.4.1)
  - Installing pydantic (2.11.7)
  - Installing starlette (0.46.2)
  - Installing fastapi (0.115.12)

Writing lock file

# Interativo
❯ python -i src/fast_zero/app.py
>>> read_root()
{'message': 'Welcome to Fast Zero!'}


❯ poetry shell
Spawning shell within /home/ubuntu/.cache/pypoetry/virtualenvs/fast-zero-HWXYPAEY-py3.12
❯ emulate bash -c '. /home/ubuntu/.cache/pypoetry/virtualenvs/fast-zero-HWXYPAEY-py3.12/bin/activate'


❯ fastapi dev fast_zero/app.py

   FastAPI   Starting development server 🚀
 
             Searching for package file structure from directories with __init__.py files
             Importing from /home/ubuntu/Full-Stack-Web-Developer/FastAPI/fast_zero/src
 
    module   📁 fast_zero      
             ├── 🐍 __init__.py
             └── 🐍 app.py     
 
      code   Importing the FastAPI app object from the module with the following code:
 
             from fast_zero.app import app
 
       app   Using import string: fast_zero.app:app
 
    server   Server started at http://127.0.0.1:8000
    server   Documentation at http://127.0.0.1:8000/docs
 
       tip   Running in development mode, for production use: fastapi run
 
             Logs:
 
      INFO   Will watch for changes in these directories: ['/home/ubuntu/Full-Stack-Web-Developer/FastAPI/fast_zero/src']
      INFO   Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
      INFO   Started reloader process [2743663] using WatchFiles
      INFO   Started server process [2743738]
      INFO   Waiting for application startup.
      INFO   Application startup complete.
      INFO   38.43.102.165:0 - "GET / HTTP/1.1" 200
      INFO   38.43.102.165:0 - "GET / HTTP/1.1" 200
      INFO   38.43.102.165:0 - "GET / HTTP/1.1" 200

# Docmentação
http://localhost:8000/redoc

# Dependencia apenas de desenvolvimento
poetry add --group dev ruff

ruff check --fix
Found 3 errors (3 fixed, 0 remaining).

poetry add --group dev pytest pytest-cov
❯ pytest
===================== test session starts =====================
platform linux -- Python 3.12.2, pytest-8.4.0, pluggy-1.6.0
rootdir: /home/ubuntu/Full-Stack-Web-Developer/FastAPI/fast_zero
configfile: pyproject.toml
plugins: cov-6.2.1, anyio-4.9.0
collected 0 items 

pytest --cov=fast_zero

Name                          Stmts   Miss  Cover
-------------------------------------------------
fast_zero/tests/__init__.py       0      0   100%
-------------------------------------------------
TOTAL                             0      0   100%


 task run

   FastAPI   Starting development server 🚀
 
             Searching for package file structure from directories with __init__.py files
             Importing from /home/ubuntu/Full-Stack-Web-Developer/FastAPI
 
    module   📁 fast_zero      
             ├── 🐍 __init__.py
             └── 🐍 app.py     
 
      code   Importing the FastAPI app object from the module with the following code:
 
             from fast_zero.app import app
 
       app   Using import string: fast_zero.app:app
 
    server   Server started at http://127.0.0.1:8000
    server   Documentation at http://127.0.0.1:8000/docs
 
       tip   Running in development mode, for production use: fastapi run
 
             Logs:
 
      INFO   Will watch for changes in these directories: ['/home/ubuntu/Full-Stack-Web-Developer/FastAPI']
      INFO   Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
      INFO   Started reloader process [3076146] using WatchFiles
      INFO   Started server process [3076186]
      INFO   Waiting for application startup.
      INFO   Application startup complete.
      INFO   38.43.102.165:0 - "GET / HTTP/1.1" 200
      INFO   127.0.0.1:35074 - "GET /redoc HTTP/1.1" 200
      INFO   127.0.0.1:35074 - "GET /openapi.json HTTP/1.1" 200

# Ignorar arquivos
$ ignr -p python > .gitignore 