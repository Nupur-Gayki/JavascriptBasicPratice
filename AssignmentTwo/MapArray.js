const students = [
  { name: 'Alice', age: 25, grade: 'A' },
  { name: 'Bob', age: 22, grade: 'B' },
  { name: 'Charlie', age: 27, grade: 'C' },
  { name: 'David', age: 20, grade: 'A' },
];
//Use the map method to create a new array that contains the squares of each number in the numbers array
let nums =[1,2,3,4,5]
let squares=nums.map((num) => {
return num * num
})
console.log(squares)

//Create an array of fruits from the fruits array, but all in uppercase.
let fruits =["apple","banana","pear"]
let uppercaseFruits =fruits.map((fruit) => {
    return fruit.toUpperCase()
})
console.log(uppercaseFruits)

//Age Increase:
//Use the map method to increase the age of each student in the students array by 2 years.
let ageIncr = students.map((stud) =>
{
    return stud.age +2
})
console.log(ageIncr)

//Create an array of numbers representing the lengths of names in the students array.
let nameLength =students.map((student) =>{
    return student.name.length
})
console.log(nameLength)

//First Letter Capitalized:
//Create an array of strings from the fruits array where each fruit's first letter is capitalized.
let fruits1 =["apple","banana","pear"]
let upperFruits =fruits1.map((fruit) => {
    
  return fruit.charAt(0).toUpperCase() + fruit.slice(1)

})
console.log(upperFruits)


