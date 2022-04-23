// this is the word that is being translated into whale language
const input = 'coding s great';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];
// This function checks if the input has vowels, and then adds another letter after e and u. 
for (i = 0; i < input.length; i++) {
  // this if statement doubles the e and u letters.
  if (input[i] === 'e') {
    resultArray.push('e');
  } else if (input[i] === 'u') {
    resultArray.push('u');
  }
  /// this part checks to see if the letter is in the vowels array and pushes the letter to the resultArray array.
  for (j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
      
    }
  }
}
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);
// this outputs OIEEA
