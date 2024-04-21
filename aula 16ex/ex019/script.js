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
        res.innerHTML = ''
    } else {
        window.alert("Valor invalido ou já encontrado na lista.")
    }
    //Zerando input para adicionar outro número
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert("Adicione valores antes de finalizar")
    } else {
        let total = valores.length //Verificando o total de números cadastrados
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            //Verificando o maior e menor valor
            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma/total
        

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> A soma dos valores informado é de ${soma}</p>`
        res.innerHTML += `<p> A média dos valores informados é de ${media}</p>`
    }
}