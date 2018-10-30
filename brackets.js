let braces = "[({})](]"

const ValidateBraces = (braces) => {
  let brances = braces.split('')
  let i;
  let squareOpen = 0
  let squareClose = 0
  let roundOpen = 0
  let roundClose = 0
  let moustacheOpen = 0
  let moustacheClose = 0
  for (i = 0; i < brances.length; i++) {
    if (brances[i] === '[') {
      squareOpen++
    } else if (brances[i] === ']') {
      squareClose++
    } else if (brances[i] === '(') {
      roundOpen++
    } else if (brances[i] === ')') {
      roundClose++
    } else if (brances[i] === '{') {
      moustacheOpen++
    } else if (brances[i] === '}') {
      moustacheClose++
    } else {
      return false
    }
  }
  return squareOpen === squareClose && roundOpen === roundClose && moustacheOpen === moustacheClose
}

console.log(ValidateBraces(braces));
