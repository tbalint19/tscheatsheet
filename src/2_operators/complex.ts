let numbers: number[] = [ 2, 3, 4 ]

numbers = [ ...numbers, 5 ]   // spread operator

let myFavNums = [ 1, 2, 3 ]
let yourFavNums = [ 4, 5, 6 ]
let result = [ ...myFavNums, ...yourFavNums ]     // [ 1, 2, 3, 4, 5, 6 ]
let result2 = [ myFavNums, yourFavNums ]          // [ [1, 2, 3], [ 4, 5, 6 ] ]

export {}