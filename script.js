const botaoMostrapalavras = document.querySelector ('#botao-palavrachave');

botaoMostrapalavras.addEventListener('clik', mostraPalavrasChave);

function mostraPalavrasChave (){
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavra-chave');
    const palavrasChave = processaTexto(texto);
    
    campoResultado.textContent = palavrasChave.join(", ");
}


function processaTexto(texto){
    let palavras = texto.split(/\P{L}+/u);
   const frequencias = contafrequencias(palavras);
   let ordenadas = object.keys(frequencias)
   return palavras; 
}

function contafrequencias(palavras){
let frequencias = {};
   for(let i of palavras){
    frequencias[i] = 0;
    for (let j of palavras){
        if (i == j){
            frequencias[i]++;
        }
    }
   }
   
   return frequencias;
}