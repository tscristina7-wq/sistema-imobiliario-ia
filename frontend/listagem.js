async function carregar() {
    const res = await fetch("http://127.0.0.1:5000/imoveis/listar");
    const imoveis = await res.json();

    const div = document.getElementById("imoveis");

    imoveis.forEach(i => {
        div.innerHTML += `
            <div class="card">
                <h3>${i.titulo}</h3>
                <p>${i.finalidade}</p>
                <p>${i.bairro}</p>
                <p>R$ ${i.valor}</p>
                <p>${i.descricao}</p>
            </div>
        `;
    });
}

carregar();
