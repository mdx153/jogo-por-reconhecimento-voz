function validaChute(chute){
    //só de colocar o + ele tenta verificar
    //se é um número 
    const numero = + chute

    //verifica se é um not a number
    if(validandoNumero(numero)){
        //colocando esse += ele não sobreescreve a box e sim
        //adiciona abaixo dela essa div
        elementoChute.innerHTML += '<div>Valor inválido!</div>'
        return
    }

    //verifica se o numero não esta entre o menor e maior valor
    if(numeroMaiorMenor(numero)){
        //colocando esse += ele não sobreescreve a box e sim
        //adiciona abaixo dela essa div
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre: ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        //limpa a tela(body) e passa o nosso conteudo.
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O Número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar-novamente">JOGAR NOVAMENTE</button>
        `
    }
    else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    }
    else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function numeroMaiorMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

function validandoNumero(numero) {
    return Number.isNaN(numero)
}

//vai pegar um click no botão e fazer o reload
document.body.addEventListener('click', e =>{
    //se tiver um clique no id especificado faz o reload
    if(e.target.id =='jogar-novamente'){
        window.location.reload()
    }
})