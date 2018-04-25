// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row=0, triangle="") {
  if (row === n) {
    return;
  }

  if (triangle.length === n) {
    console.log(triangle)
    return steps(n, row+1)
  }

  let add;
  if (triangle.length <= row) {
    add = "#"
  } else {
    add = " "
  }
  steps(n, row, triangle + add)
}

// function steps(n) {
//   for(let i=0; i<n; i++) {
//     let stair = ""
//     for(let j=0; j<n; j++) {
//       j <= i ? stair += "#" : stair += " "
//     }
//     console.log(stair)
//   }
// }

// function steps(n) {
//   let string = ""
//   for(let i = 0; i < n; i++) {
//     string = "#" + string
//     if (string.length < n) {
//       string = addSpace(string, n)
//     }
//     console.log(string.slice(0,n))
//   }
// }
//
// function addSpace(string, number) {
//   while (string.length < number) {
//     string += " "
//   }
//   return string
// }




module.exports = steps;
