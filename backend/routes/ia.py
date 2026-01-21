from flask import Blueprint, request, jsonify
from ia.descricao import gerar_descricao

ia_bp = Blueprint("ia", __name__, url_prefix="/ia")

@ia_bp.route("/descricao", methods=["POST"])
def descricao_ia():
    dados = request.json
    texto = gerar_descricao(dados)
    return jsonify({"descricao": texto})
