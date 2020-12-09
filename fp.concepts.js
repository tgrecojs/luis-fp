/**
 * same input --> same outputs
 * cause no side-effects
 * rely on external state
 */

 const f = x => x + 10;
 const g = x => x  * 2;
 const halfIt = x => x / 2;
 const lt3 = x => x < 3;
 const isEven = x => x % 2 === 0;
 const data = [1,2,3,4,5,6];

 data.map(x => f(g(x))) //?
 data.map(g).map(f) //?

 data.filter(lt3).filter(isEven) //?
 data.filter(isEven).filter(lt3).toString();

 // closure - a function with references to its lexical scope
 const addXToTen = x => {
   const number = 10;
   return number + x;
 }

 addXToTen(10) //?

const addTwoNumbers = x => y => x + y;
const addOneHundred = addTwoNumbers(100);
addOneHundred(50)
data.map(addOneHundred) //?

addTwoNumbers(5)(10) //?


const add = (x, y) => x + y;
const multiply = (x ,y ) => x  * y;
data.reduce(multiply, 1) //?


data.reduce((acc, val) => {
  console.log({ acc, val })
  return acc
}, []) //?


