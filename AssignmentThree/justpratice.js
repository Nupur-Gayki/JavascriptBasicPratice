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