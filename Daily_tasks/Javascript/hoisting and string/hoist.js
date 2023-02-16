
console.log(k===undefined);
var k=3;


console.log(a);//run successfully due to hoisting
var a;//undefined

console.log(c);//undefined
var c=9;//declarartion is hoisted to the top but initialization not
console.log(c);


var b;
console.log(b);//undefined
b=10; //after initialization
console.log(b);

//with let hoist is different
// console.log(d);//can't access declaration before initialization
// let d=2;

let e;
console.log(e);
e=3;
console.log(e);

//with const
// console.log(A);//can't access decalaration before initialization
// const A =3;

const A = 12;
console.log(A);

//Functions
greet()
function greet(){
    var x = 2+2;
    console.log(x);
    console.log("Good Morning");
}


// console.log(square);//can't access decalaration before initialization
// const square = function(n){
//     return n*n;
// }

