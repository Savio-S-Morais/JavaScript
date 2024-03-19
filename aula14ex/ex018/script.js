function calcular() {
    let num = Number(document.getElementById("numero").value)
    let result = document.getElementById("result")

    for(let i = 1; i <= 10; i++){
        multi = num * i

        result.innerHTML += `<p>${num} x ${i} = ${multi}</p>`
        console.log(`${num} x ${i} = ${multi}`)
    }
}