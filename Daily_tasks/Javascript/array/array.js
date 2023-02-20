// const arr1 = new Array("hello", ment, 3.24);
//const arr=["a","b","c"];
// const arr2 = Array(arrayLength);
const arr3 = [];
console.log(arr3.arrayLength);

const arr =[32];//creates an array with only one element
const arr4 = Array(32);//creates an array with no elements and arr.length is 32

// const arr7 =Array(9.3);//RangeError :Invalid array length
const ar =Array.of(8.6);//contains only one element 

//referring to array element
const myArray =["aeroplane","car",'bicycle'];
console.log(myArray[0]);
console.log(myArray[2]);
console.log(myArray[-1]);
console.log(myArray["length"]);

// populating an array
const emp=[];
emp[0]="A";
emp[1]="B";
emp[2]="C";

//length
const veg =[];
veg.push('carrot','raddish','beetroot','onion');
console.log(veg);
veg[5]="tomato";
console.log(veg[5]);//tomato
console.log(veg);
console.log(veg.length);
console.log(Object.keys(veg));//['0','1','2','3',empty,'5']
veg.length=10;
console.log(veg);//shows with empty count
console.log(veg[9]);//undefined
veg.length=4;
console.log(Object.keys(veg));
console.log(veg.length);
console.log(`--------------------`);

//methods
const colors =["yellow","green","tale", "purple"];
colors.forEach(element => console.log(element));

//concat() joins 2 or more arrays and return an array
let arr5 =['a','c','b','q'];
console.log(arr5.concat('1','3','5'));
arr5 = arr5.concat('1','3','5');
console.log(arr5);

//join() joins all elements of an array
let jo=['sun', 'moon', 'earth'];
console.log(`join${jo.join('-universe')}`);

//push- adds an element at the end of an array and results in length of a array
const arr6 =['5','6','8'];
console.log(`push${arr6.push('7')}`);//4

//pop- removes last element in an array and returns that element
const arr7=["a","g","2","9"];
console.log(`pop${arr7.pop()}`);

//shift- removes first element and returns that element
const arr8 =['2','c','a','r'];
console.log(`shift${arr8.shift()}`);
//unshift - adds the element and returns that
const arr9 =["2",'5',"6",'v'];
console.log(arr9.unshift('3'));//gives the length
console.log(arr9.unshift(0,1));
console.log(`--------------------`)

//copywithin
const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1.copyWithin(0, 2, 3));
console.log(array1.copyWithin(1, 2));

//entries
const array =['a','y','w','o'];
const item = array.entries();
console.log(item.next().value);
console.log(item.next().value);

//every
console.log(`everyelement is:`);
const army = [11, 130, 49, 29, 10, 13];
console.log(army.every((currentValue) => currentValue >8));

//fill()
const army1 = [10, 2, 3, 4,7,9];
console.log(army1.fill(0, 2, 4));// at 2nd index fill 0 upto 4th index
console.log(army1.fill(4, 1));
console.log(army1.fill(3));

//filter
const word = ["animals",'ant','pencils','elephant','car'];
console.log(word.filter(word => word.length > 6));
console.log(`--------------------`)
//find
const army2 = [5, 12, 8, 130, 44];
console.log(army2.find(element => element >20));//first 130 is there

//findIndex
const army3 = [5, 12, 8, 13, 44];
console.log(army3.findIndex((element) => element > 13));

//findlast
// const army4 = [15, 220, 150, 130, 44];
// console.log(army4.findLast((element) => element > 44));//findlast element which is >44 
// console.log(army4.findLastIndex((element) => element > 44));
console.log(`--------------------`)
//from
console.log(Array.from('good'));//'g','o','o','d'
console.log(Array.from([2,5,10],x => x+x));

//includes
const army4 = [20,34,12,67,34,90,20];
console.log(army4.includes(34));
console.log(army4.includes(4));
//indexOf
console.log(`index${army4.indexOf(12)}`);
console.log(army4.indexOf(20,2));

//lastIndexOf
console.log(`lastindex${army4.lastIndexOf(34)}`);
console.log(army4.lastIndexOf(12));


console.log(`--------------------`)
//isArray
console.log(Array.isArray([2,4,6]));//true
console.log(Array.isArray('[]'));//false

//of()
console.log(Array.of('feel','2',9,"car"));
console.log(Array.of());

//map
console.log(army4.map(x=> x*2));

//reverse
console.log(army4);
console.log(`reverse: ${army4.reverse()}`);

//slice
console.log(army4.slice(3));

//some
console.log(army4.some(element => element %2===0 ));
//sort
const mon=['june','april','may','september','july'];//in alphabetical order
console.log(mon.sort());

//tostring
const army5 = [01, 90, 't', 'die'];
console.log(army5.toString());
