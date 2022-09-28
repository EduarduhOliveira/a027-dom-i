const frutas = ["laranja", "limão", "uva, "];
const frutasArray = document.getElementById("lista-de-frutas")
frutasArray.innerHTML= frutas
console.log(frutasArray.innerHTML)

const novaFruta = document.getElementById("manga")
function novoTexto(){
    console.log(novaFruta.value)
}

function adicionaFruta(){
    frutasArray.innerHTML += manga.value
    console.log(frutasArray.innerHTML)
}


console.log(novaFruta.innerHTML)