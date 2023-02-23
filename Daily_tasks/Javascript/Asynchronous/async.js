//synchronous
const nam ="sumi";
const value =`hello ${nam}`;
console.log(value);


//synchronous function
function myValue(){
    return `hello ${nae}`;
}

const nae="sumeka";
const val =myValue(nae);
console.log(val);

//callback 

const text = doFunction();

function doenter3(val){
  return val +3;
}
function doenter2(val){
    return val +2;
}
function doenter1(val){
    return val +1;
}
function doFunction()
{
    let res= 0;
    res = doenter1(res);
    res = doenter2(res);
    res = doenter3(res);
    console.log(`result :${res}`);
}

const sum = doIt();

function doSum(val,callback){
    const result =val+1;
    callback(result);
}

function doSum1(val,callback){
    const result =val+2;
    callback(result);
}
function doSum2(val,callback){
    const result =val+3;
    callback(result);
}
function doIt(){
    doSum(0,(result1) =>{
        doSum1(result1,(result2) => {
            doSum2(result2,(result3) => {
                console.log(`result : ${result3}`);
            });
        });
    });
}


//asynchronous 
//setTimeout
console.log("welcome");
setTimeout(()=> console.log("sumeka", 2000));
console.log("---------");

// setTimeout(myfunction,3000);
// function myfunction(){
//     console.log("saying");
// }

//setinterval
let timeInterval = setInterval(()=> console.log(`hello`),1000);

setTimeout(()=>{ clearInterval(timeInterval);console.log('stop');},2500);