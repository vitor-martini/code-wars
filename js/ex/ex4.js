// 'Descrição: Verifique se todos os elementos de um array são números.
// Entrada: [1, 2, 3, 4, 5]
// Saída esperada: true
function solution(input){
    return input.every(x => typeof(x) == "number");
}

let inputNum = [1, 2, 3, 4, 5];
let inputStr = ['1', 2, 3, 4, 5];

console.log(solution(inputNum));
console.log(solution(inputStr));