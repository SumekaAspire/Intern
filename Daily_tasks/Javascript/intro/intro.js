const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  para.textContent = `Name: ${name}`;
}

// alert("Welcome!");
let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x);
}
console.log(x);

let a = 1;
let b = 'hello';
let c = true;
let d = false;
console.log(a += 3);
console.log(b += ' world'); 
console.log(a+=b);
console.log(c+=1);//boolean +number =addition
console.log(c+=d);//number + boolean =addition

let kin="see";
console.log(kin);
console.log(kin+=false);//string+ boolean =concatenation
console.log(kin+="saw");//string +string = concatenation

let car=7;
console.log(car+=2);//number + number = addition
console.log(car+="see");//number +string =concatenation

//Multipliacation operator
 let don = 2;
console.log(don*=2);
console.log(don*="fee");

//Division operator
let e=16;
console.log(e/=2);
console.log(e/=0);
console.log(e/"hello");

//Remainder operator
let f=3;
console.log(f%=2);
console.log(f%=0);
console.log(f%='welcome');


