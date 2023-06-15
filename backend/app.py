from mediana import informacao
from flask import Flask

app = Flask(__name__)


@app.route('/')
def main():
    return {"api": "up"}


@app.get("/info/<float:valor>")
def info(valor):
    return informacao(valor)
