// Descrição: Gere uma string repetindo a palavra "Olá" 5 vezes, separadas por vírgula.
// Entrada: "Olá"
// Saída esperada: "Olá,Olá,Olá,Olá,Olá"

function solution(input){
    return Array(5).fill(input).join(",");
}

let input = "Olá";
console.log(solution(input));