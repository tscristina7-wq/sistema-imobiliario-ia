function mostrar(id) {
    document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

async function carregarImoveis() {
    const res = await fetch("http://127.0.0.1:5000/imoveis");
    const dados = await res.json();

    const div = document.getElementById("lista-imoveis");
    div.innerHTML = "";

    dados.forEach(i => {
        div.innerHTML += `<p>${i.tipo} - ${i.bairro} - R$ ${i.valor}</p>`;
    });
}

async function cadastrarImovel() {
    const imovel = {
        finalidade: "Venda",
        tipo: document.getElementById("tipo").value,
        bairro: document.getElementById("bairro").value,
        valor: document.getElementById("valor").value,
        quartos: 0,
        banheiros: 0,
        vagas: 0,
        descricao: document.getElementById("descricao").value
    };

    await fetch("http://127.0.0.1:5000/imoveis", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(imovel)
    });

    alert("Imóvel cadastrado!");
    carregarImoveis();
}

carregarImoveis();
