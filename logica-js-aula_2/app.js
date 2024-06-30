alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');


//se chute for igual ao número secreto
if(chute==numeroSecreto){//quando usar o dolar tem que usar a crase
    alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto}`);
} else {
    if (chute > numeroSecreto){
        alert(`O numero secreto é menor do que ${chute}`);
    } else {
        alert(`O numero secreto é maior do que ${chute}`)
    }
}
