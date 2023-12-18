//https://www.codewars.com/kata/577a98a6ae28071780000989
var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){    
    return Math.max(...list);
}

let minTest = [-52, 56, 30, 29, -54, 0, -110];
let maxTest = [4,6,2,1,9,63,-134,566];

console.log(min(minTest));
console.log(max(maxTest));