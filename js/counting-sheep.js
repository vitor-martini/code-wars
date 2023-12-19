//https://www.codewars.com/kata/54edbc7200b811e956000556
function countSheeps(sheep) {
    return sheep.filter(x => x).length;
}

let sheepTest = [true,  true,  true,  false,
                 true,  true,  true,  true ,
                 true,  false, true,  false,
                 true,  false, false, true ,
                 true,  true,  true,  true ,
                 false, false, true,  true];
console.log(countSheeps(sheepTest));