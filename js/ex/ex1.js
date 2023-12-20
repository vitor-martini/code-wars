// Descrição: Converta um array de números em um array de strings, onde cada número é seguido pela palavra "item".
// Entrada: [1, 2, 3]
// Saída esperada: ["1 item", "2 item", "3 item"]

function solution(input){
    return input.map(x => x.toString() + " item");
}

let input = [1, 2, 3];
console.log(solution(input));