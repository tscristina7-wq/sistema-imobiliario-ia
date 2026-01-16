import sqlite3

with open("database/schema.sql", "r", encoding="utf-8") as f:
    schema = f.read()

conn = sqlite3.connect("database/sistema_imobiliario.db")
cursor = conn.cursor()
cursor.executescript(schema)
conn.commit()
conn.close()

print("Banco de dados criado com sucesso!")
