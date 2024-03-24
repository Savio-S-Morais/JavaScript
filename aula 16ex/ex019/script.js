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
        window.alert("Tudo Ok")
    } else {
        window.alert("Valor invalido ou já encontrado na lista.")
    }
}