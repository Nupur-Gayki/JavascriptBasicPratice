//Create a promise that resolves with the message `"Hello, Promise!"` 
//after 1 second. Log the resolved value to the console.
 let Hifunc= () => new Promise((resolve,reject) =>{
    //resolve(setInterval(() => console.log("Hello,Promise!"),1000))
   
 })

 Hifunc()

 //Create a promise that resolves to the number `10`. 
 //Chain `.then()` to multiply the number by 2, then subtract 4, and finally log the result.
 let data = 10;
 let result =0;
  Promise.resolve(data)
  .then(() => {
    result=data * 2
  })
  .then(() => { 
   result= result - 4
   console.log( result)
})

//Create a promise that rejects with an error message `"Something went wrong"`.
 //Catch the error and log it to the console.
 Promise.reject().catch(( err) =>{
   console.log("Something went wrong")
 })

 //Create a promise that resolves to `"First"`, and inside its `.then()` handler, 
 // return another promise that resolves to `"Second"`. Log both results in sequence.
 Promise.resolve().then (() => {
   console.log("First")
 })
 .then(() => {
   console.log("Second")
 })
 //.......
 const result1 = new Promise((res,rej) =>{})
.then(() =>console.log("first"))
.then(() => console.log("second"))
//....
Promise.resolve("Initial")
  .then(value => {
    console.log(value);
    "No Return";
  })
  .then(value => {
    console.log("Second then:", value);
  });

  Promise.resolve()
  .then(() => {
    throw new Error("Oops!");
  })
  .then(() => {
    console.log("This won't run");
  })
  .catch(err => {
    console.log("Caught:", err.message);
  });
//when  line no 53 throw error at that time line 59 catch it return log

 
 