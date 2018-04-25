// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let newString = ""
//   for(let i=str.length-1; i>=0; i--) {
//     newString += str[i]
//   }
//   return newString
// }

function reverse(str) {
  return str.split("").reduce((reverse, char) => char + reverse, "")
}
module.exports = reverse;
