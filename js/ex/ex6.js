// Descrição: Dado um array de números, calcule a soma de todos os elementos.
// Entrada: [10, 20, 30, 40]
// Saída esperada: 100

function solution(input){
    return input.reduce((a, b) => a + b);
}

let input = [10, 20, 30, 40];
console.log(solution(input));