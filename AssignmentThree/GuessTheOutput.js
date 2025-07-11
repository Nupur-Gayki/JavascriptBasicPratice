console.log(a);
var a = 10;

//output  undefined
//console.log(b);
let b = 20;
//Cannot access 'b' before initialization

var x = 1;
function test() {
  console.log(x);
  var x = 2;
}
test();
//undefined
let a = 5;
function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
const fn = outer();
fn();
//Identifier 'a' has already been declared

const a = 10;
a = 20;
console.log(a);
//Identifier 'a' has already been declared

