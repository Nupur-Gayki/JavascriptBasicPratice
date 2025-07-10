//Given an array of objects, use the filter method to return an array containing only objects where the price property is greater than 50.

const students = [
  { name: 'Alice', age: 25, grade: 'A' },
  { name: 'Bob', age: 22, grade: 'B' },
  { name: 'Charlie', age: 27, grade: 'C' },
  { name: 'David', age: 20, grade: 'A' },
];
const products = [
  {
    id: 1,
    productName: "tshirt",
    price: 50,
  },
  {
    id: 2,
    productName: "jeans",
    price: 500,
  },
  {
    id: 3,
    productName: "shoes",
    price: 200,
  },
];

let priceless= products.filter((prod) =>
{
    return prod.price > 50;
}
)
console.log(priceless)

//Filter the students array to get only the students who are 25 years or older.
let olderstud = students.filter((stud) =>{
    return stud.age >= 25
})
console.log(olderstud)

//Create an array of students who have an 'A' grade in the students array
let grade =students.filter((stud) =>
{
    return stud.grade=="A"
})
console.log(grade)
//Create an array of names from the students array that have less than 6 characters.
let names =students.filter((stud) =>{
    return stud.name.length < 6
})
console.log(names)

//Filter the students array to get only the students who have a grade of 'B'.
let gradeb =students.filter((stud) =>
{
    return stud.grade=="B"
})
console.log(gradeb)

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
//Filter the fruits array to include only fruits that contain the letter 'a'.
let fruitnames = fruits.filter((fruit)=>
{
    return fruit.match("a")
})
console.log(fruitnames)