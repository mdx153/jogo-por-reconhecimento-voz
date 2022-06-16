const elementoChute = document.getElementById('chute')

//esse faz o seguinte quando a aplicação abrir ele vai ativar
window.SpeechRecognition = window.SpeechRecognition|| webkitSpeechRecognition;
const recognition = new SpeechRecognition(); //instancia do reconhecimento
recognition.lang = 'pt-Br' //configura o idioma
recognition.start() //inicia o reconhecimento

//Quandoo reconhecer uma frase faça
recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    console.log(e.results[0][0].transcript)
    exibeChuteNaTela(chute)
    validaChute(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}
//dica: e.target.lang acessa o conteudo de idioma

//esse evento observa se finalizou o reconhecimento e starta novamente
recognition.addEventListener('end', () => recognition.start())