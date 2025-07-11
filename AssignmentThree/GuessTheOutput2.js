var d = 10;
(function() {
  console.log(d);
  var d = 5;
})();

//undefined

let a = 10;
{
  let a = 20;
  console.log(a);
}
console.log(a);
// 20 10

(function() {
  //console.log(a);
  let a = 15;
})();
//Cannot access 'a' before initialization

function foo() {
  if (true) {
    var x = 5;
  }
  //console.log(x);
}
foo();
// output 5
function foo() {
  if (true) {
    let x = 5;
  }
  //console.log(x);
}
foo();
//ReferenceError: x is not defined
let a1 = 1;
function one() {
  let a1 = 2;
  function two() {
    console.log(a1);
  }
  return two;
}
const func = one();
func();

// output = 2

var a2 = 1;
function test() {
  console.log(a2);
  var a2 = 2;
  console.log(a2);
}
test();
// undefined , 2
console.log(typeof a3);
var a3 = 'hello';
// undefined
//console.log(typeof b);
let b = 'hello';
//Cannot access 'b' before initialization

function outer() {
  var x = 10;
  function inner() {
    console.log(x);
  }
  var x = 20;
  return inner;
}
const innerFn = outer();
innerFn();
//20