//Write a function named `processNumbers` that accepts an array and a callback. 
// The callback should double each number and return the result.

let numbers=[1,2,3,4,5]
 function processNumbers(callback , args)
 {
   return callback(args);
 }
 function doubleNum (numbers)
 {  
    let result = numbers.map((num) => { return num * 2})
    return result
 }
 console.log(processNumbers(doubleNum,numbers))

//Create a function `fetchData` that simulates data fetching using `setTimeout` 
// and takes a callback to run when data is "fetched".
 function fetchData (callback, args)
 {
     return callback(args);
 }
 function time(num)
 {
  setTimeout(() =>{
    console.log("Data is fetched")
  },num)
}
  console.log(fetchData(time,2000))


  //Write a higher-order function `calculator` that takes two numbers and a callback 
  // function to perform operations like add, subtract, etc.
  function calculator(callback,a,b,operations)
  {
    return callback(a,b,operations)
  }
  let a= 2;
  let b= 3;
  let operations="add"
  //let operations =["add","sub","mul"]
  function Calc(a,b,operations)
  { let result =0;
    if (operations== "add")
     return result = a+b;

    else if(operations =="sub")
    return result = a-b;

    else if(operations=="mul")
        return result= a*b
  }
  //console.log(calculator(Calc,a,b,"add"))
  console.log(calculator(Calc,a,b,"sub"))
  console.log(calculator(Calc,a,b,"mul"))

  //Create a function `repeatAction` that takes a function and a number `n`, and 
  // calls the function `n` times.
   function repeatAction(callback, n)
   {
     for (let i =0;i < n;i++)
     {
       callback()
     }
     
   }
   function action()
   { console.log( "Hi")}
   console.log(repeatAction(action,5))