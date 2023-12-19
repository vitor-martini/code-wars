//https://www.codewars.com/kata/54c27a33fb7da0db0100040e
var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0;
}

console.log(isSquare(25));
console.log(isSquare(26));
console.log(isSquare(3));