let x: number = 5

let y: number = x + 5     // operator that works with 2 numbers -> 1 number
// value of y is 10

let z: number = 100 - y
// value of z is 90

let a: number = 1 * 1
let b: number = 2 / 1
let c: number = 5 ** 2
// value of c is 25

let d: number = 10 % 3
// value of d is 1
let e: number = 11 % 3
// value of e is 2
let f: number = 123 % 20
// value of f is 3 (6x20 + 3)

// transform string to number
let myNumber: string = "12"

let myRealNumber: number = +myNumber



// fun fact
let myString: string = "macska"
let myNotNumber: number = +myString
// NaN - "not a number"

let result = myNotNumber + 5
console.log(result)
// still NaN - "not a number"

export {}