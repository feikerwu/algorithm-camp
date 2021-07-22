/**
 * Definition for Node.

 */

export class Node {
  val: number
  next: Node | null
  random: Node | null
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.random = (random===undefined ? null : random)
  }
}

function copyRandomList(head: Node | null): Node | null {
  let dummy = new Node()
  const map = new Map()

  let newHead = dummy, iterator = head

  while(iterator) {
    map.set(iterator, new Node(iterator.val))
    iterator = iterator.next
  }

  iterator = head

  while(iterator) {
    iterator = iterator.next
    const cur = map.get(iterator)
    if (cur) {
      cur.next = map.get(iterator.next) || null
      cur.random = map.get(iterator.random) || null
    }
  }

  return newHead.next
};