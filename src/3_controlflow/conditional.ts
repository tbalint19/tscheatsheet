let checkAge = (age: number) => {
  let sentence = "The user "

  // some boolean
  if (age > 17)
  { // if true
    sentence += "has access"
  }
  else
  { // if false
    sentence += "does not have access"
  }
  return sentence
}

let res1 = checkAge(10)
// the value of res1 is "The user does not have access"
let res2 = checkAge(20)
// the value of res2 is "The user has access"

export {}