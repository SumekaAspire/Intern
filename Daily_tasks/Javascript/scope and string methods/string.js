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
console.log(state.slice(-4,-1));
console.log(state.slice(4));
console.log(state.slice(-4));
//changing case
console.log(state.toLowerCase());
console.log(state.toUpperCase());

//updating parts of a string
const state1 ="Give me.Thank me.ME";
console.log(state1.replace('Give','Not'));
console.log(state1.replace('give','Not'));//OUTPUT as in state1
console.log(state1.replace('Give','$$$'));
// console.log(state1.replaceAll('me','you'));

console.log(`:::${state1.repeat(3)}`);
 const inst ="The qelement In an striNg";
 const sentence="good morning";
console.log(inst.at(0));
let index =5;
console.log(inst.at(index));
index = -4;
console.log(inst.at(index));
console.log(inst.lastIndexOf('n'));//last index

console.log(inst.charAt(2));//character at
console.log(inst.charCodeAt(4));//element code 
console.log(inst.concat(sentence));//concatenate
console.log(inst.concat(' ',sentence));//concatenate

console.log(String.fromCharCode(189,43,190,61));
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));
const reg =/[A-Z]/g;//matching array of values
console.log(inst.match(reg));
console.log(`---------------------------`);

const str = "The boy rides a bicycle in the evening.";
const str1= str.split(' ');//split words
console.log(str1[4]);
console.log(str1[10]);
console.log(str.split(" "));
console.log(str.split(''));//split characters
console.log(str.split());

const strObj = new String('bird');//string value
console.log(strObj);
console.log(strObj.valueOf());
console.log(`---------------------------`);

//normalize
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';
console.log(`${name1}, ${name2}`);
console.log(name1==name2);
console.log(name1.length===name2.length);

console.log(name1.normalize());

//padEnd and padStart
const str3 ="Thesun and the moon";
console.log(str3.padEnd(18,'.'));
console.log(str3.padEnd(5));


const str2 ="   Happy Morning   ";//trim
console.log(str2.trim());
console.log(str2.trimEnd());
console.log(str2.trimStart());

//file - raw
const filePath = String.raw`C:\Development\profile\contact.html`;
console.log(`The file is uploaded from: ${filePath}`);
