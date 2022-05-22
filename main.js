let input = "turpentine and turtles";

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
    const checkInput = input[i];
    if (checkInput === 'e' || checkInput === 'u') {
        resultArray.push(input[i])
    }
    // console.log(checkInput);
    for (let j = 0; j < vowels.length; j++) {
        const checkVowels = vowels[j];
        if (checkVowels === checkInput) {
            resultArray.push(checkVowels)
            // console.log(resultArray)
        }
    }
}
// console.log(resultArray)

const resultString = resultArray.toString().toUpperCase();

console.log(resultString.replace(/,/g, ''));
