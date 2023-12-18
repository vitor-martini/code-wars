//https://www.codewars.com/kata/57f780909f7e8e3183000078
function grow(x){
    return x.reduce((total, element) => total * element)
}

let growTest = [2, 2, 2, 2, 2, 2];
console.log(grow(growTest));