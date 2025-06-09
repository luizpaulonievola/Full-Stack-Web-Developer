import flask
from flask import Flask, render_template

app = flask.Flask(__name__)

debug = True

app.config["DEBUG"] = debug

@app.route('/')

def index():
  return render_template('index.html')

if __name__ == "__main__":
  app.run(host="0.0.0.0", debug=debug, port="5000")
