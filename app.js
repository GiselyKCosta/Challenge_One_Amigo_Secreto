let amigos = []; // Array para armazenar os nomes

// Seleciona os botões
let botaoAdd = document.getElementById("botaoAdd");
let botaoResultado = document.getElementById("btnSortear");
botaoAdd.addEventListener("click", adicionarAmigo);
botaoResultado.addEventListener("click", sortearAmigo);

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value;
    // Verifica  se o nome não foi preenchido
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Atualiza a lista
    atualizarLista();

    // Limpa o campo
    input.value = "";
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista

    // Adiciona amigo na lista
    for (let amigo of amigos) {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    }
}

function sortearAmigo() {
    // Sorteia um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    // Exibe o nome sorteado na interface
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>O amigo sorteado é: <strong>${amigoSorteado}</strong></p>`;
}
