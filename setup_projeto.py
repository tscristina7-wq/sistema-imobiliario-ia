import os

estrutura = [
    "backend/app.py",
    "backend/database/db.py",
    "backend/routes/imoveis.py",
    "backend/templates/base.html",
    "backend/templates/dashboard.html",
    "backend/templates/imoveis.html",
    "backend/templates/novo_imovel.html",
    "backend/static/uploads"
]

for item in estrutura:
    if "." in item:
        os.makedirs(os.path.dirname(item), exist_ok=True)
        open(item, "w", encoding="utf-8").close()
    else:
        os.makedirs(item, exist_ok=True)

print("Estrutura criada com sucesso!")
