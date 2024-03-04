function verificar(){
    var ano = new Date().getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!') //Alerta de erro para input vazio ou com ano acima do atual
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = '' //Cria variavel vazia
        var img = document.createElement('img') //Cria uma tag img
        img.getAttribute('id', 'foto') //Dando um ID para tag img

        if (fsex[0].checked) {
            genero = 'homem' //Incrementa o valor 'homem' a variavel genero
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'homem-crianca.jpg')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src', 'homem-jovem.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                //velho
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher' //Incrementa o valor 'mulher' a variavel genero
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'mulher-crianca.jpg')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src', 'mulher-jovem.jpg')
            } else if (idade < 60) {
                //adulta
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                //velha
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) //Cria img dentro da div#res
    }
}