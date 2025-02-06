'use strict'
const categorias = [
    {nome: 'Celular', icon: 'celular.png',cor:'red'},
    {nome: 'Informatica', icon: 'notebook.png',cor:'white'},
    {nome: 'games', icon: 'controller.png',cor:'purple'},
    {nome: 'Moveis', icon: 'sofa.png',cor:'brown'},

]

function criarMenu(categoria){
    const novoItem = document.createElement('li')
    const novaImg = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novaImg.src = `./img/${categoria.icon}`
    novoSpan.textContent = categoria.nome

    novoItem.appendChild(novaImg)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover:${categoria.cor}`

    lista.appendChild(novoItem)


}

categorias.forEach(criarMenu)