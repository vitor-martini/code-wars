//https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = n => {
    let ret = [];
    for(let i = n; i > 0; i--){
        ret.push(i);
    }
    return ret;
};

console.log(reverseSeq(5))
