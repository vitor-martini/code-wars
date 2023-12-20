// Descrição: Crie uma string que é a junção das letras iniciais de cada palavra em um array.
// Entrada: ["Hyper", "Text", "Markup", "Language"]
// Saída esperada: "HTML"

function solution(input){
    return input.map(x => x[0]).join("");
}

let input = ["Hyper", "Text", "Markup", "Language"];
console.log(solution(input));