function contar(){
    let inicio = document.getElementById('inpInicio')
    let fim = document.getElementById('inpFim')
    let passo = document.getElementById('inpPasso')
    let res = document.getElementById("contagem")
    

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = "Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0) {
            window.alert("Passo inválido! Considerando PASSO = 1")
            p = 1
        }
        //adiciona a variavel 'num' o mesmo valor da variavel 'inicio', após isso compara o valor inicial com o valor final, então printa na tela e após isso soma o valor inicial com o salto que deve ser dado.
        if(i < f) {
            for(let c = i; c <= f; c += p) { //Contagem crescente
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c -= p) { //Contagem decrescente
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

    /*
    if(inicio, fim, passo != 0) {
        res.innerHTML = ""
        res.innerHTML = "Contando: "
        
        var contagem = document.createElement('p') //Cria uma tag p
        for(var num = inicio; num <= fim; num = num+passo){
            var contagem = document.createElement('p') //Cria uma tag p
            contagem.innerHTML = `${num} &#x1F449`
            res.appendChild(contagem)
        }
        contagem.innerHTML = '&#x1F3C1'
    } else {
        res.innerHTML = "Impossivel contar"
    }
    */
}