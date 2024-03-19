function calcular() {
    let num = document.getElementById("numero")
    let result = document.getElementById("result")

    if(num == 0){
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        result.innerHTML = ""
        for(let i = 1; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n * i}`
            result.appendChild(item)

            /*multi = n * i
    
            console.log(`${n} x ${i} = ${multi}`)*/
        }
    }

    
}