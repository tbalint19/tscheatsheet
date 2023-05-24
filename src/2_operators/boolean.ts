let x: number = 5
let y: number = 6

let isEqual: boolean = x === y
// value of isEqual is false


// very rarely used - not a best practice
/* let a: number = 4
let b: string = "4"
let almostEqual: boolean = a == b
console.log(almostEqual)
let equal: boolean = a === b
console.log(equal); */

let result1 = x !== y  // not equal
let result2 = x < y
let result3 = x > y
let result4 = x <= y
let result5 = x >= y

let myBool: boolean = true
myBool = !myBool
// value of myBool is false

// transform to boolean
let bool1: boolean = !5
// value of bool1 is false
let bool2: boolean = !0
// value of bool2 is true
let bool3: boolean = !!0
// value of bool3 is false

let bool4: boolean = !"alma"
// value of bool4 is false
let bool5: boolean = !""
// value of bool5 is true
let bool6: boolean = !!"false"
// value of bool6 is true

let bool7: boolean = !![]
// value of bool7 is true

let bool8: boolean = !!{}
// value of bool8 is true

// ternary operator
let bool9: string = x === y ? "egyenlo" : "nem egyenlo"
// value of bool9 is "nem egyenlo"

let bool10: boolean = x === y && result1 === result2    // AND
let bool11: boolean = x === y || result1 === result2    // OR

export {}