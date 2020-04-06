function reverseStr(str) {
  return str.split('').reverse().join('')
}

function rightRotateStr(str, m) {
  let leftPart = reverseStr(str.substring(0, str.length - m))
  let rightPart = reverseStr(str.substring(str.length - m, str.length))
  return reverseStr(leftPart + rightPart)
}

console.log(rightRotateStr('ilovebaofeng', 7))