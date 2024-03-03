function carregar(){
    //declarando as variaveis
    var msg = window.document.getElementById('msg') //Div da mensagem
    var img = window.document.getElementById('imagem') //Div onde fica as imagens
    var hora = new Date().getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'foto-manha.png'
        document.body.style.background = '#eaa200'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'foto-tarde.png'
        document.body.style.background = '#feba65'
    } else {
        //Boa noite!
        img.src = 'foto-noite.png'
        document.body.style.background = '#06202f'
    }
}
