//Write an arrow function called multiply that takes two parameters and returns their product. Use this function to multiply 4 and 7 and log the result to the console.
let multiply = (x,y) => x*y
console.log(multiply(2,3))


//Create an arrow function called square that takes a number as a parameter and returns its square. Use this function to square the numbers 3, 6, and 9, and log the results to the console
let nums =[3,6,9];
let square =(x) => x*x
nums.forEach(function(num){

console.log(square(num))
})

//Write an arrow function called greet that takes a name as a parameter and logs a greeting message. If no name is provided, use the default value "Guest". Test the function with and without providing a name.greet

let greet =(name) =>{
   name ?console.log("Welcome " + name)  :console.log("Guest")}

 console.log(greet(""))