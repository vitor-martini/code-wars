function sumTwoSmallestNumbers(numbers) {  
    let orderedNumbers = numbers.sort((a, b) => a - b);
    return orderedNumbers[0] + orderedNumbers[1];
}

let test = [5, 8, 12, 19, 22];
console.log(sumTwoSmallestNumbers(test));