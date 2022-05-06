function HelloWorld() {

    const txtInit = document.getElementById('ex0')

    const txt1 = document.getElementById('ex1') // Faz a busca de um elemento por seu ID.

    const btn = document.querySelector('button#btn-init') // Faz a busca de um elemento, passando sua tag e seu ID ou Classe.
    
    // Lembrando, Classe começa com "." | ID com "#".

    txtInit.innerText = "Hello, World!" // Sobescreve o contéudo de Texto da tag.

    txt1.innerHTML = "Parabéns, você já é um iniciado &#128526;" // Sobrescreve o conteúdo HTML da tag, por isso foi possível criar um emoji.


    btn.remove() // Após o clique, o botão é removido do documento.

}

function Listar() {

    const itemLista = document.createElement('li')

    const itemText = document.createTextNode("remove.")
    
    const paragraf1 = document.querySelector('p#list-paragraf-1')

    const paragraf2 = document.querySelector('p#list-paragraf-2')

    const btn = document.querySelector('button#btn-list')

    itemLista.appendChild(itemText)

    document.getElementById('lista').appendChild(itemLista)

    btn.remove()

    paragraf1.innerHTML = "Agora sim &#x1F642;"

    paragraf2.remove()

}

function MudarDark() {

    document.querySelector('body').style.backgroundColor = "black"
    document.querySelector('main').style.color = "white"

}

function MudarLight() {
    
    document.querySelector('body').style.backgroundColor = "white"
    document.querySelector('main').style.color = "black"
}

function Mostrar() {

    document.getElementById('hidden').style.display = 'block'

}

function ImagemHappy() {
    
    document.getElementById('imagem').setAttribute('src', 'media/bad.jpg')
}

function ImagemAngry() {

    document.getElementById('imagem').setAttribute('src', 'media/good.jpg')
}