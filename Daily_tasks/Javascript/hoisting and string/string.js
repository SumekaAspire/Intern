const button= document.querySelector("button");
function greeting(){
 const name = prompt("Your name :");
 alert(`hello ${name}, Good Morning!`);
}
button.addEventListener("click", greeting);

const string="name";
console.log(string);

const tring='school';
console.log(tring);

//bad way in initialize the string
// const see='sgsdh";//error
// const saw1=hdhdsd';//error
// const seen1='ewjhewdhw'fdfdsd';//error

// const saw=wgsdusf;//not defined
// console.log(saw);

const apple ="I'm on the earth";
const apple1 ='dhs"dcss"';
const seen='I \'ve got it';
console.log(apple);
console.log(apple1);
console.log(seen);

//concatenate strings
const nan=`sum , .`;
console.log(nan);//backtick
// console.log(tring "+" string);
const hen="sumi";
const hen1=`hello, ${hen}`;
console.log(hen1);

const joined = `${nan},${hen}`;
console.log(joined);
console.log(`${tring} ${string}`);

const pen="Welcome";
const pen1= pen +" "+"you";
console.log(pen1);
console.log(pen+pen1);

// Numbers and strings
const side="front";
const number=123;
const num="123";
console.log(`${side}, ${number}`);
console.log(typeof num);
console.log(typeof number);

const convertNum= Number(num);
console.log(convertNum);
const myString = number.toString();
console.log(typeof myString);

//for multiple lines
const tell=`hfivhdovjoi
dfcvdcjvovlxkcv;cvc  lvbl;b`;
console.log(tell);

const told ="Good morning to all of you. Happy to\nsee you";
console.log(told);

//operator precedence
console.log(5+6*2/2-2);
//decimal convert
const deci=1.7889;
const  decimal= deci.toFixed(2);
console.log(decimal);
// console.log(deci.toFixed(2));


//length of the string
const len="Good to see you. And thank you.";
console.log(len.length);
console.log(len[0]);//first character
// console.log(len[4]);
console.log(len[len.length-1]);//last character