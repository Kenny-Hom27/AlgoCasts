// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next=null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let counter = 0
    let node = this.head

    while (node) {
      counter++
      node = node.next
    }
    return counter
  }

  getFirst() {
    return this.head
  }

  getLast() {
    if (!this.head) {
      return
    }

    let node = this.head
    while (node.next) {
      node = node.next
    }
    return node
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head) {
      return
    }
    this.head = this.head.next
  }

  removeLast() {
    if (!this.head || !this.head.next) {
      this.head = null
      return
    }

    let node = this.head
    while (node.next) {
      if (!node.next.next) {
        node.next = null
      } else {
        node = node.next
      }
    }
  }

  insertLast(data) {
    let last = this.getLast()

    if (last) {
      last.next = new Node(data)
    } else {
      this.head = new Node(data)
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node
      }
      counter++
      node = node.next
    }
    return node
  }

  removeAt(index) {
    let previous = this.getAt(index-1)
    let current = this.getAt(index)

    if (current && previous) {
      previous.next = current.next
    } else if (current){
      this.head = current.next
    }
    // let counter = 0
    // let node = this.head
    //
    // let previous;
    // while (node) {
    //   if (index === 0) {
    //     this.head = node.next
    //     return
    //   } else if (counter === index) {
    //     previous.next = node.next
    //   }
    //   previous = node
    //   node = node.next
    //   counter++
    // }
  }

  insertAt(data, index) {
    let previous = this.getAt(index-1) || this.getLast()
    let current = this.getAt(index)

    if (index === 0 || !this.head) {
      this.head = new Node(data, current)
    }

    if (previous) {
      previous.next = new Node(data, current)
    }
  }

  forEach(fn) {
    let node = this.head
    let counter = 0
    while (node) {
      fn(node, counter++)
      node = node.next
    }
  }

  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }


}

module.exports = { Node, LinkedList };
