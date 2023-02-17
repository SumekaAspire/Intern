//length of the string
const len="Good to see you. And thank you.";
console.log(len.length);
console.log(len[0]);//first character
// console.log(len[4]);
console.log(len[len.length-1]);//last character-count from


console.log(`one=${1}`);
console.log(`here it ${'is'}`);
console.log(`:${len}`);
console.log(`---------------------------`);
//includes()
const type= "entertainment";

if(type.includes('tertain')){
    console.log("Found");
}
else{
    console.log("Not found");
}
console.log(type.includes("ment"));

//startsWith()
const type1= "entertainment";

if(type1.startsWith('En')){
    console.log("startswidth with en");
}
else{
    console.log("not startswidth \"en\"");
}

//endsWith()
const type2= "entertainment";

if(type2.endsWith('ment')){
    console.log("endswith 'ment'");
}
else{
    console.log("Not endswith");
}
console.log(type2.startsWith("e"));
console.log(type2.endsWith("m"));
console.log(type2.endsWith("M"));
console.log(`---------------------------`);


//Position of a substring 
//indexof()
const typ = "entertainment is just entertainment";
const don=typ.indexOf("entertainment");
console.log(typ.indexOf("entertainment"));
console.log(typ.indexOf("entertainment",don+1));

console.log(typ.indexOf("n"));
console.log(typ.indexOf("x"));
console.log(`---------------------------`);
// Extracting substring from a string
const state = "enViRonMent";
console.log(state.slice(1,4));
console.log(state.slice(-1,-4));
console.log(state.slice(4));
//changing case
console.log(state.toLowerCase());
console.log(state.toUpperCase());

//updating parts of a string
const state1 ="Give me.Thank me.ME";
console.log(state1.replace('Give','Not'));
console.log(state1.replace('give','Not'));//OUTPUT as in state1
console.log(state1.replace('Give','$$$'));
// console.log(state1.replaceAll('me','you'));

 const inst ="the qelement in an string";
 const sentence="good morning";
// console.log(inst.at(0));
// let index =5;
// console.log(inst.at(index));
// index = -4;
// console.log(inst.at(index));

console.log(inst.charAt(2));//character at
console.log(inst.charCodeAt(4));//element code 
console.log(inst.concat(' ',sentence));//concatenate

console.log(inst.lastIndexOf('n'));//consider from 1

