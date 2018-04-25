// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {}
  str.split("").forEach(function(letter) {
    if (chars[letter]) {
      chars[letter] += 1
    } else {
      chars[letter] = 1
    }
  }
  )
  return Object.keys(chars).reduce(function(a,b) {return chars[a] > chars[b] ? a : b})
}

module.exports = maxChar;
