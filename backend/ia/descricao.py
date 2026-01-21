def gerar_descricao(dados):
    return f"""
Excelente {dados['tipo']} localizado no bairro {dados['bairro']}.

Conta com {dados['quartos']} quartos, {dados['banheiros']} banheiros,
{dados['vagas']} vaga(s) de garagem.

Valor: R$ {dados['valor']}

Ideal para quem busca conforto, segurança e ótima localização.
"""
