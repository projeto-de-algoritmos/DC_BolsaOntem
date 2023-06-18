from mediana import informacao
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def main():
    return {"api": "up"}


@app.get("/info/<float:valor>")
def info(valor):
    return informacao(valor)
