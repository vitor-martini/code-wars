// Descrição: Encontre a primeira palavra em um array que tenha mais de 5 caracteres.
// Entrada: ["gato", "elefante", "cachorro", "peixe"]
// Saída esperada: "elefante"
function solution(input){
    return input.find(x => x.length > 5);
}

let input = ["gato", "elefante", "cachorro", "peixe"];
console.log(solution(input));