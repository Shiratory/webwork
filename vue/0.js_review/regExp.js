// regExp.js : 정규표현식

let text = "Visit W3Schools!";
const exp = /Visit/i; // i
let n = text.search(exp);
console.log(n)

let bool = exp.test(text)
console.log(bool);

// 숫자 3자리만
let numExp = /^[\S][\d]{3}$/
let numText ='aa0f'
bool = numExp.test(numText)
console.log('숫자표현', bool)
