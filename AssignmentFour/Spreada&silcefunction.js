const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
// Get the first three elements using slice
let newfruits =fruits.slice(0,3)
console.log(newfruits)

// Use slice to get [3, 4] from the array
let newfruits1= fruits.slice(2,4)
console.log(newfruits1)
const arr = [10, 20, 30, 40, 50];
// Use splice to remove 2 elements starting from index 2
arr.splice(2,2)
console.log(arr)

const names = ['Alice', 'Bob', 'Charlie'];
// Replace 'Bob' with 'David' using splice
let startindex = 1
let repalceindex = 1
names.splice(startindex,repalceindex,'David')
console.log(names)


const a = [1, 2, 3];
const b = [4, 5];
// Merge arrays a and b into a new array using spread operator
const c =[...a,...b]
console.log(c)
     
const obj1 = { x: 1 };
const obj2 = { y: 2 };
// Combine both objects into a new object using spread

const obj3 ={...obj1,...obj2}
console.log(obj3)


function sum(...args) {
   return args.reduce((total,arg) => total + arg ,0)
}
console.log(sum(1, 2, 3)); // Output: 6

function firstAndRest(a, ...rest) {
  console.log("First:", a);
  console.log("Rest:", rest);
}
//First: 10
//Rest: [ 20, 30, 40 ]
firstAndRest(10, 20, 30, 40);


const { a1, ...rest } = { a1: 1, b: 2, c: 3 };
console.log(rest)
console.log(a1)
// Log values of 'a' and 'rest'

