//Use the forEach method to iterate over the following array and log each element to the console:
const fruits = ['apple', 'banana', 'orange', 'grape'];
fruits.forEach(function(fruit){
   // console.log(fruit)
})

//Use the forEach method to double each element in the given array and store the results in a new array:
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number)
{
   // console.log(number*2)
})

//Calculate and log the sum of all elements in the following array using the forEach method:
const prices = [20, 30, 15, 10, 25];
let result = 0
prices.forEach(function(price) {
     result += price
    })
    //console.log(result)

 //Iterate over the properties of the following object and log each key-value pair to the console using forEach:
 const persons = { name: 'John', age: 25, job: 'developer' };   

 Object.entries(persons).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});