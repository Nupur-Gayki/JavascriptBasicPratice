//Use a for...in loop to iterate over the properties of the following object and log each key and its value to the console:


const cars = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2022
};
 for(const car in cars)
 {
   // console.log(`key ${car}`)
    //console.log(`value ${cars[car]}`)
 }
 //se a for...in loop to count the number of properties in the following object:
 const student = {
  name: 'Alice',
  age: 21,
  grade: 'A',
  enrolled: true
};
let count =0;
for(let stud in student)
{
    count++;
}
console.log(count);

//Use a for...in loop to create an array of all the keys in the following object:
const book = {
  title: '1984',
  author: 'George Orwell',
  pages: 328
};
let bookkey= [];
for(const key in book)
{
    bookkey.push(key)
}
console.log(bookkey)