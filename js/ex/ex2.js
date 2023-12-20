// Descrição: Dado um array de palavras, crie uma única string, onde cada palavra é separada por um asterisco *.
// Entrada: ["JavaScript", "é", "incrível"]
// Saída esperada: "JavaScript*é*incrível"

function solution(input){
    return input.join("*");
}

let input = ["JavaScript", "é", "incrível"];
console.log(solution(input));