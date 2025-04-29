const defaultValue = 1;
function add(num1, num2){
  return num1+num2;
}

function minus(num1, num2){
  return num1-num2;
}

// commonJS모듈(node) ( ES module(vue))
module.exports = {defaultValue, add, minus}