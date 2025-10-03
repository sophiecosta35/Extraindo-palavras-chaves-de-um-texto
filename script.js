import { PALAVRAS_RUINS } from "./palavrasRuins.js";
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
for(let i in palavras){
    palavras[i] = palavras[i].tolowercase();
}
    
palavras = tirapalavrasruins(palavras);

   const frequencias = contafrequencias(palavras);
   let ordenadas = object.keys(frequencias).sort(ordenapalavra);
function ordenapalavra(p1,p2){
    return frequencias[p2] - frequencias[p1];
}
   console.log(ordenadas);
   return ordenadas.slice(0,10); 
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

function tirapalavrasruins(palavras) {
  
const palavrasboas = [];
for (let palavra of palavras) {
    if (! PALAVRAS_RUINS.has(palavra)&& palavra.length > 2) {
        palavrasBoas.push(palavra);
    }
}
return palavrasBoas;
}
