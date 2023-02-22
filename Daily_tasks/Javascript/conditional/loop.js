//Looping through collections with a loop
const names = ['a','s','u','m','e','k','a'];
for (const index of names) {
  console.log(index);
}
//same as
for (let i=0;i<names.length;i++)
{
  console.log(names[i]);
}


function toMap(string) {
  return string.toUpperCase();
}

function tofilter(veg)
{
  return veg.startsWith('c');
}
const veg = ['carrot', 'beetroot', 'onion', 'Tomato', 'cabbage', 'Ginger'];
const mapVeg = veg.map(toMap);
console.log(mapVeg);
const filterVeg = veg.filter(tofilter);
console.log(filterVeg);

//looping through collection with for a loop

const animals =['cat','rat','cow','dog'];
for (const animal of animals){
  console.log(animal);
}

for(let i=0;i<animals.length;i++){
  console.log(animals[i]);
}

let myAnimal ="Animal :";
for (const animal of animals){
  myAnimal+= ` ${animal}`;
}
console.log(myAnimal);

let myAnimals ="Animals :";
for (let i=0;i<animals.length;i++){
  myAnimals+= `,${animals[i]}`;
}
console.log(myAnimals);

// while
const vegs =['carrot','beetroot','onion','tomato'];
let myVegs ="Vegetables : ";
let i=0;
while(i<vegs.length){
  if( i === vegs.length-1)
  {
   myVegs+= ` and ${vegs[i]}`;
  }
  else{
    myVegs+= ` ${vegs[i]}`;
  }
  i++;
}
console.log(myVegs);

//do while

const fruit = ['apple','mango','orange'];
let myfruit= "Fruits : ";
let j=0;
do{
  if( j === fruit.length-1)
  {
   myfruit += ` and ${fruit[j]}`;
  }
  else{
    myfruit += ` ${fruit[j]}`;
  }
  j++;
}while(j<fruit.length);
console.log(myfruit);
