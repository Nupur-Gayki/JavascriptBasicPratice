const person = { name: "Alice", age: 25, job: "Engineer" };
let keys =Object.keys(person)
console.log(keys)

const scores = { math: 90, science: 85, english: 88 };
// Use Object.values to get an array of all scores
let values =Object.values(scores)
console.log(values)

const settings = { theme: "dark", layout: "grid" };
// Use Object.entries to iterate and log key-value pairs
let pairs =Object.entries(settings)
console.log("enteries", pairs);