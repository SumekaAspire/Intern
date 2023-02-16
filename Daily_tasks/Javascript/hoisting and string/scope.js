//declaration
let dec;
let dec1 = 1;
let dec2 = 2, dec3 = 3;
let dec4, dec5 = 4;

//let - block-scoped local variable
let i = 1;
if (i === 1) {
  let i = 2;
  console.log(i);
 
}
console.log(i);

var k= 1;
let l= 2;
if (k === 1) {
  var k = 11; //global
  let l= 22; //local inside if-block
  console.log(k);
  console.log(l);
}
console.log(k);
console.log(l);





