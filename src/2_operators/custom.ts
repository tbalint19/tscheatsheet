let x: number = 5
let y: number = 6

let getDoubleOfSumAsString = (num1: number, num2: number) => {
  let result: string = "" + ((num1 + num2) * 2)
  return result
}

let res1 = getDoubleOfSumAsString(x, y)
// let res1 = "" + ((x + y) * 2)

let res2 = getDoubleOfSumAsString(1, 2)
// let res2 = "" + ((1 + 2) * 2)

let res3 = getDoubleOfSumAsString(10, 20)
// let res3 = "" + ((10 + 20) * 2)

// let res4 = getDoubleOfSumAsString(1, true)
// let res5 = true - "alma"

// same as getDoubleOfSumAsString (this!)
function getDoubleOfSumAsString2(num1: number, num2: number) {
  let result: string = "" + ((num1 + num2) * 2)
  return result
}