var idade = 50
//Condição aninhada
if(idade < 16){
    console.log('Não vota')
}else if(idade < 18 || idade > 65){
    console.log('Voto opcicional')
}else{
    console.log('Voto obrigatorio')
}