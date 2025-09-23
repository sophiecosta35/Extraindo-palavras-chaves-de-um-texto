const botaoMostrapalavras = document.querySelector ('#botao-palavrachave');

botaoMostrapalavras.addEventListener('clik', mostraPalavrasChave);

function mostraPalavrasChave (){
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavra-chave');
    const palavrasChave = processaTexto(texto);
    
    campoResultado.textContent = palavrasChave.join(", ");
}

function processaTexto(texto){
    let palavras = texto.split(" ");
    return palavras; 
}