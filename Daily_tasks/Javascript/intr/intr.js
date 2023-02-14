//comparison operators
console.log(5===2);
console.log(2===2);
console.log(2==='2');
console.log('see'==='see');
console.log(5===2+3);

console.log(6!==2+4);
console.log('see'!=='saw');

console.log(6>2);
console.log(7<10);

const vegtable = ['tomato', 'cabbage', 'carrot'];
for (const vegtables of vegtable) {
  console.log(vegtables);
}

const firstValue=10;
const secondValue=20;
let sumofValue=firstValue+secondValue;
document.getElementById("para").innerHTML="The Sum value is:"+sumofValue;

//var
var see;
see =2;
//is same
see =2;
var see;

var car=2;
if(car===2){
    var car=4;
    console.log(car);

}
console.log(car);


let myText="Text";
console.log(typeof myText);
let myNumber=500;
console.log(typeof myNumber);


const animal={species:cat};
console.log(animal.species);

const value=2;
value = 3;//cannot reassign
console.log(value);



