// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let collection = [root, "stop"]
  let counter = [0]

  while (collection.length > 1) {
    let current = collection.shift()
    if (current === "stop") {
      collection.push("stop")
      counter.push(0)
    } else {
      collection.push(...current.children)
      counter[counter.length-1]++
    }
  }
  return counter
}

module.exports = levelWidth;
