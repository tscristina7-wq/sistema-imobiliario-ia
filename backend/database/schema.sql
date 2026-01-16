CREATE TABLE IF NOT EXISTS imoveis (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    finalidade TEXT,
    tipo TEXT,
    bairro TEXT,
    valor REAL,
    quartos INTEGER,
    banheiros INTEGER,
    vagas INTEGER,
    descricao TEXT,
    status TEXT DEFAULT 'Disponível',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
