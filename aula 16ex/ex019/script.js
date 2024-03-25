let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    //Verifica se o valor dentro de número é um número, e também não deve estar na lista.
    if(isNumero(num.value) && !isLista(num.value, valores)) {
        valores.push(Number(num.value)) //Adicionando o número do input dentro do array
        console.log(valores)
        let exibe = document.createElement('option') //Cria a tag option
        exibe.text = `Valor ${num.value} adicionado` 
        lista.appendChild(exibe) //Vincula a tag option para dentro do Select (variavel lista)
    } else {
        window.alert("Valor invalido ou já encontrado na lista.")
    }
}

function finalizar() {
    if(valores.length == 0) {
        window.alert("Função ainda em desenvolvimento")
    } else {
        calcular(valores)
    }
}

function calcular(valores) {
    console.log(valores)
    res.innerHTML += `<br>O total de valores são ${valores.length}`
    valores.sort()
    console.log(valores)
    res.innerHTML += `<br>O maior valor informado foi ${Math.max(Number(valores))}`
    res.innerHTML += `<br>O menor valor informado foi ${valores[0]}`

    let soma = soma
    for(let i = 0; i < valores.length; i++) {
        soma = valores[i] + valores[i++]
    }

    console.log(`O resultado da soma foi de $`)
}

