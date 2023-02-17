//declaration
let dec;
let dec1 = 1;
let dec2 = 2, dec3 = 3;
let dec4, dec5 = 4;

//let - block-scoped local variable
let i = 1;
if (i === 1) {
  let  i = 2;
  console.log(i);
}
console.log(i);

// let x = 4;
// let x = 1; //redeclaration of let x
// if (x === 1) {
//   let y = 2;
//   console.log(x); 
// }
// console.log(x);


let a = 1;
let b = 1;
if (a === 1) {
  let b = 2;
  console.log(`a is ${a}`); 
}
console.log(`b is ${b}`);

let x = 1;
let y = 1;
if (x === 1) {
  let y = 2;
  console.log(`y is ${y}`);
  
}
console.log(`y is ${y}`);

let m = 1;

if (m === 1) {
  var c  = 2;
  let m = 2;
    m = 5;
  console.log(`m is ${m}`);
}
console.log(`m is ${m}`);
console.log(`---------------------------`);
var k= 1;
let l= 2;
if (k === 1) {
  var k = 11; //global
  let l= 22; //local inside if-block
  console.log(`k is ${k}`);
  console.log(`l is ${l}`);
}
console.log(`k is ${k}`);
console.log(`l is ${l}`);
/*--------------------------------------------------------------------------*/
//var

// declaration
var num;
var num1 = 0;
var num1=0,num2=10;
var num1,num2 = 10;
var n= "A",n1= n;// var n,n1=n="A";

var d = 1;
if (d === 1) {
  var d = 2;
  console.log(d);
 
}
console.log(d);

var e = 1;
if (e === 1) {
   e = 2;
  console.log(e);
 
}
console.log(e);

/*--------------------------------------------------------------------------*/
//const
