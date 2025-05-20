# Criando redes

```bash
docker network create t1
07762f2e9edb5d8f72fa4a8d25ea67671d0281576f8bc249411557afda7f6ccf

❯ docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
a3f2164e7b0a   bridge    bridge    local
6f02bf246a52   host      host      local
ab145966c8d2   none      null      local
07762f2e9edb   t1        bridge    local

$ docker run -d -p 5000:5000 --name flask_ex_container --rm flask_externo:latest 

$ dlf flask_ex_container
 * Serving Flask app 'app'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:5000
 * Running on http://172.17.0.2:5000
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 291-151-372
38.42.102.254 - - [18/May/2025 17:19:37] "GET / HTTP/1.1" 200 -
38.42.102.254 - - [18/May/2025 17:19:38] "GET /favicon.ico HTTP/1.1" 404 -