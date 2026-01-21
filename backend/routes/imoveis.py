from flask import Blueprint, render_template, request, redirect
from database.db import get_db
import os

imoveis_bp = Blueprint("imoveis", __name__)

@imoveis_bp.route("/imoveis")
def listar():
    db = get_db()
    imoveis = db.execute("SELECT * FROM imoveis").fetchall()
    return render_template("imoveis.html", imoveis=imoveis)

@imoveis_bp.route("/imoveis/novo", methods=["GET", "POST"])
def novo():
    if request.method == "POST":
        titulo = request.form["titulo"]
        valor = request.form["valor"]
        destino = request.form["destino"]
        descricao = request.form["descricao"]

        db = get_db()
        db.execute(
            "INSERT INTO imoveis (titulo, valor, destino, descricao) VALUES (?, ?, ?, ?)",
            (titulo, valor, destino, descricao)
        )
        db.commit()
        return redirect("/imoveis")

    return render_template("novo_imovel.html")
