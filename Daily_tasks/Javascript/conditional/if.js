//if else
let shop = true;
let kids;

if (shop === true) {
    kids = 12;
    console.log(kids);
} else {
   kids = 2;
  console.log(kids);
} 


let shop1 = false;
let kids1;

if (shop1) {
    kids1 = 12;
} else {
   kids1 = 2;
  console.log(kids1);
} 

//nesting if-else

let temp = 40;
let choosen = 'sunny';
if(choosen!== 'rainy')
{
  if(temp> 80)
  {
    console.log(`Too HOT..`);
  }
  else if(temp< 79){
    console.log(`Sunny..`);
    
  }
}
else{
  console.log("Rainy/spring");
}

//logical operator

if(choosen = 'sunny' && temp < 79){
  console.log("sunny!!");
}
else if(choosen ='sunny' && temp >80){
  console.log('Too hot!!!');
}

if(temp >= 80 || choosen === 'sunny'){
  console.log("summer");
}
else{
  console.log("Normal Sunny");
}

//switch
let choose = 'alt';
switch(choose){
  case 'a': console.log("a is the output.");break;
  case '': console.log(" is the output.");break;
  case '0': console.log("0 is the output.");break;
  case '-1': console.log("-1  is the output.");break;
  case 'A': console.log("A is the output.");break;
  case 'alt': console.log("alt is the output.");break;
  default :console. log("answer is not there");
}

//Ternary operator
console.log(`-------------------------\nTERNARY OPERATOR : `);
function get(isanswer){
  return(isanswer ? 'correct': 'Wrong');
}
console.log(`true : ${get(true)}`);
console.log(`false :${get(false)}`);
console.log(`null : ${get(null)}`);
console.log(get(1));
console.log(`0 ${get(0)}`);//wrong
console.log(`space :${get( )}`);//wrong

const age = 26;
const vote = age >= 18 ? "Can Vote" : "Cannot Vote";
console.log(`Age ${age} - ${vote}`); 
const greet = (people) => {
  const name = people ? people.name : "stranger";
  return `people - ${name}`;
};

console.log(greet({ name: "Amul" }));
console.log(greet(null));
console.log(greet( ));


