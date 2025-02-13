'use strict';

const categorias = [
    { nome: 'Celular', icon: 'celular.png', cor: 'red' },
    { nome: 'Informatica', icon: 'notebook.png', cor: 'white' },
    { nome: 'Games', icon: 'controller.png', cor: 'purple' },
    { nome: 'Moveis', icon: 'sofa.png', cor: 'brown' },
];

const produtos = [
    { 
        nome: 'Headset', 
        descricao: 'Headset Fone de Ouvido Havit HV-H2002d Purple, Gamer', 
        preco: 'R$189.99', 
        imagem: 'headset_branco-removebg-preview.png' 
    },
    { 
        nome: 'Notebook Gamer', 
        descricao: 'Notebook Gamer Acer Nitro 5, i5, GTX 1650, 8GB RAM, SSD 512GB', 
        preco: 'R$4.500,00', 
        imagem: 'notebookgamer.png' 
    },
    { 
        nome: 'Controle de PS5', 
        descricao: 'Controle sem fio DualSense para PlayStation 5, branco', 
        preco: 'R$350,00', 
        imagem: 'controle.png' 
    }
];

// Função para criar o menu
function criarMenu(categoria) {
    const novoItem = document.createElement('li');
    const novaImg = document.createElement('img');
    const novoSpan = document.createElement('span');
    const lista = document.getElementById('menu');

    novaImg.src = `./img/${categoria.icon}`;
    novoSpan.textContent = categoria.nome;

    novoItem.appendChild(novaImg);
    novoItem.appendChild(novoSpan);
    novoItem.style = `--cor-hover:${categoria.cor}`;

    lista.appendChild(novoItem);
}

// Função para criar os cards dinamicamente
function criarCard(produto) {
    const cardContainer = document.querySelector('main');

    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = `./img/${produto.imagem}`;

    const divInfo = document.createElement('div');

    const titulo = document.createElement('h1');
    titulo.textContent = produto.nome;

    const descricao = document.createElement('h3');
    descricao.textContent = produto.descricao;

    const preco = document.createElement('span');
    preco.textContent = produto.preco;

    const botao = document.createElement('button');
    botao.textContent = 'Compre agora';

    divInfo.appendChild(titulo);
    divInfo.appendChild(descricao);
    divInfo.appendChild(preco);
    divInfo.appendChild(botao);

    card.appendChild(img);
    card.appendChild(divInfo);

    cardContainer.appendChild(card);
}

// Criar menu e cards dinâmicos
categorias.forEach(criarMenu);
produtos.forEach(criarCard);
