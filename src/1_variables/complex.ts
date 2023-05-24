// Complex datastructures

// array
let favNumbers: number[] = [ 1, 5, 9 ]
let favCars: string[] = [ "Ferrari", "Porsche" ]

// object
type Person = {
  name: string
  age: number
}

let person: Person = {
  name: "John",     // or: "name": "John",
  age: 20           // or: "age": 20
}

// ... 100 lines of code

// access
let someNumber = favNumbers[0]    // indexing starts from 0
// value of someNumber is 1

let someOtherNumber = favNumbers[1]
// value of someOtherNumber is 5

let hasAcces = person["age"] > 17        // or: person.age


// modify
favCars[0] = "Opel"
person["age"] = 10
