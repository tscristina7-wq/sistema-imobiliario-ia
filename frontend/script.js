<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Cadastrar Imóvel</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="sidebar">
    <h2>🏠 Sistema IA</h2>
    <a href="index.html">Cadastrar</a>
    <a href="listagem.html">Imóveis</a>
</div>

<div class="content">
    <h1>Novo Imóvel</h1>

    <form id="formImovel" enctype="multipart/form-data">
        <input name="titulo" placeholder="Título" required>

        <select name="finalidade">
            <option value="Venda">Venda</option>
            <option value="Aluguel">Aluguel</option>
            <option value="Ambos">Venda e Aluguel</option>
        </select>

        <input name="tipo" placeholder="Tipo (Casa, Apto...)">
        <input name="bairro" placeholder="Bairro">
        <input name="valor" placeholder="Valor">
        <textarea name="descricao" placeholder="Descrição"></textarea>

        <input type="file" name="fotos" multiple>

        <button type="submit">Salvar</button>
    </form>
</div>

<script src="script.js"></script>
</body>
</html>
