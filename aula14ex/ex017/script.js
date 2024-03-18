function contar(){
    var inicio = Number(document.getElementById('inpInicio').value)
    var fim = Number(document.getElementById('inpFim').value)
    var passo = Number(document.getElementById('inpPasso').value)
    var resultado = document.getElementById("contagem")
    
    //Verficando há input vazio ou zero
    if(inicio, fim, passo != 0 || null){
        resultado.innerHTML = ""
        resultado.innerHTML = "Contando: "
        //adiciona a variavel 'num' o mesmo valor da variavel 'inicio', após isso compara o valor inicial com o valor final, então printa na tela e após isso soma o valor inicial com o salto que deve ser dado.
        var contagem = document.createElement('p') //Cria uma tag p
        for(var num = inicio; num <= fim; num = num+passo){
            var contagem = document.createElement('p') //Cria uma tag p
            contagem.innerHTML = `${num} &#x1F449`
            resultado.appendChild(contagem)
        }
        contagem.innerHTML = '&#x1F3C1'
    } else {
        resultado.innerHTML = "Impossivel contar"
    }
}