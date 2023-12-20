// Descrição: Inverta a ordem das palavras em uma string.
// Entrada: "JavaScript é incrível"
// Saída esperada: "incrível é JavaScript"

function solution(input){
    return input.split(" ").reverse().join(" ");
}

let input = "JavaScript é incrível";
console.log(solution(input));
