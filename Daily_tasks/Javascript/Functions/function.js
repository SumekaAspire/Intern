//Functions
const text = 'welcome to the page';
const str = text.replace('welcome', 'Go');
console.log(str);

const array = ['go','went','gone'];
console.log(array.join(' - '));

//Invoking function 

// function myworld(){
//     alert("welcome to the world");
// }
// myworld();

//function parameters
const number = Math.random();//doesn't need parameter
const tex = 'welcome to the page';
const st = text.replace('welcome', 'Go');//replace() need two parameter

//optional parameters
const arra = ['go','went','gone'];
console.log(array.join());//parameter is optional

//default parameter
function hen(animal='one chick'){
    console.log(`hen has : ${animal}`);

}
hen();
hen('two chicks');

//anonymous function
const ant =( function (event)
{
    console.log("anonymous function");
});

//arrow function
const arrow = ( (event)=>{
    console.log("arrow function");
});
const ar = ( (event)=>
    console.log("arrow function"));

//if the function takes one parameter ,omit brackets
const arro= (event => console.log("omit brackets") );

const origin =[20,45,30];
console.log(origin.map((item) => item*2));

const box =document.querySelector("#box");
const out =document.querySelector("p");

box.addEventListener('keydown',(event)=> out.textContent = `You pressed "${event.key}"`);



