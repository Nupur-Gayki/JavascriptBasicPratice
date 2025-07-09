//Use a for...of loop to log each character of the following string:


const greeting = "Hello";
for(const greet of greeting)
{
    console.log(greet)
}

//Use a for...of loop to calculate the total of the following array:


const scores = [10, 20, 30, 40];
let result =0;
for(const score of scores)
{
    result +=score;
}
console.log(result)

//Use a for...of loop to push only the even numbers into a new array:
let evenno =[];
const numbers = [1, 2, 3, 4, 5, 6];
for(const num of numbers)
{
    if(num %2 ==0)
    {
        evenno.push(num)
    }
}
console.log(evenno)