const maiorValor = 100
const menorValor = 1

const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    //cria numeros pseudo-aleatorio de acordo com o valor
    //dinamico passado em maior valor
    return parseInt(Math.random() * (maiorValor + 1))
}

console.log(`Número sorteado foi: ${numeroSecreto}`)

//seta dentro do html os valores dinamico, recuperando e alterando
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor