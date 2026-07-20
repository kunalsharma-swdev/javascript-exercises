let x;
let y;
let z =[];
const add = function(x,y) {
  return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(z) {
  let summ =0;
  for(let i=0;i<z.length;i++){
    summ+=z[i];
  }
  return summ;
};

const multiply = function(z) {
  let summ =1;
  for(let i=0;i<z.length;i++){
    summ = summ*z[i];
  }
  return summ;
};

const power = function(x,y) {
	summ=1;
  for(let i=0;i<y;i++){
    summ = summ*x;
  }
  return summ;
};

const factorial = function(x) {
  summ=1;
	for(let i=x;i>1;i--){
    summ=summ*i;
  }
  return summ;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
