let multiply = (str: string, num: number) => {
  let result = ""

  // run this 25 / 35 / num times
  result += str
  // ----------------------------

  return result
}

let res1 = multiply("alma", 25)
let res2 = multiply("korte", 35)


// while
let multiplyWithWhile = (str: string, num: number) => {
  let result = ""

  let counter = 1
  while (counter <= num)
  {
    result += str
    counter += 1 // !!!!!!
  }

  return result
}

let res3 = multiplyWithWhile("alma", 10)
console.log(res3);

let censor = (word: string) => {
  let result = ""

  let index = 0
  while (word[index] !== undefined) {
    result += "x"
    result += word[index]
    index += 1
  }

  return result
}

let res4 = censor("alma")         // ==> xxxx
let res5 = censor("csereszyne")   // ==> xxxxxxxxxx

console.log(res4);
console.log(res5);

export {}