CREATE TABLE IF NOT EXISTS imoveis (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    finalidade TEXT,
    tipo TEXT,
    bairro TEXT,
    valor REAL,
    descricao TEXT
);

CREATE TABLE IF NOT EXISTS fotos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    imovel_id INTEGER,
    arquivo TEXT
);
