//arrow function

const add2 = (num1, num2) => num1 + num2
const mul = (a,b)  => a*b
  const mula = mul(2,3); 
const res = add2(20,39);
console.log(res);
console.log(mula);
  
const isFirstBig = (x , y) => x > y;
  
const isbig = isFirstBig(12,30);
console.log(isbig);

//multiline arrow function

const domath = (t,n) => {
  const makedouble = t*2;
  const againdouble = n*2;
  const result = makedouble + againdouble ;
  return result ;
}

const ans = domath(2,3);
console.log(ans);