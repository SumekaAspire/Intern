const fruits = ["Apple", "Banana"];
console.log(fruits.length);

const fruits2 = new Array("Apple", "Banana");
console.log(fruits2.length);

const fruits3 = "Apple, Banana".split(", ");
console.log(fruits3.length);
console.log(fruits.indexOf("Banana"));
fruits.includes("Banana"); // true
fruits.includes("Cherry"); 
fruits.indexOf("Banana") !== -1; // true
fruits.indexOf("Cherry") !== -1; // false

const fruit = ["Apple", "Banana"];
const fruitString = fruit.join(", ");
console.log(fruitString);

const fruis = [];
fruits.push("banana", "apple", "peach");
console.log(fruis.length);

fruits[5] = "mango";
console.log(fruits[5]); 
console.log(Object.keys(fruits)); 
console.log(fruits.length);

fruits.length = 10;
console.log(fruits);
console.log(Object.keys(fruits)); 
console.log(fruits[8]);
