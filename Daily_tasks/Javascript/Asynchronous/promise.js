//promise constructor

const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('good');
    },100);
});

promise.then((value) => {
    console.log(value);
})
console.log(promise);

function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            const error= false;
            if(!error)
            {
                console.log('promise is resolved');
                resolve();
            }
            else{
                console.log("promise is not resolved");
                reject();
            }
        }, 2000);
    })
}
func1().then(function(){
    console.log("resolved");
}).catch(function(){
    console.log("not resolved");
})

//then()-2 arguments:callback func for fullfilled and reject cases

const promise1= new Promise((resolve,reject)=> {
    reject('error');
});

promise1.then((value) => {
    console.log(value);//success
},(reason)=>{
    console.error(reason);//error
}
);


const p1 = new Promise((resolve, reject) => {
    resolve(1);
  });
  
  p1.then((value) => {
    console.log(value); // 1
    return value + 1;
  }).then((value) => {
    console.log(value); // 2

  });
  
  p1.then((value) => {
    console.log(value); // 1   
  });
  
//promise.all() -fullfills all input promises

const pro = Promise.resolve(2);
const pro1 = 12;
const pro2  = new Promise((resolve,reject) => {
    setTimeout(resolve,500,'see');
});
Promise.all([pro,pro1,pro2]).then((values)=> console.log(values));

const a = Promise.all([12,13,14]);
const b =Promise.all([1,2,3,Promise.reject(278)]);
const c =Promise.all([1,2,3,Promise.resolve(222)]);

setTimeout (()=>{
    console.log(a);
    console.log(b);
    console.log(c);
});


//resolve()
const prom3 = Promise.resolve(123);
prom3.then((v)=>{
    console.log(v);
});
//resolving an array
const p2 = Promise.resolve([1,23,13,17]);
p2.then((v)=> console.log(v));
p2.then((v)=> console.log(v[3]));

//resolving another promise
const p3 = Promise.resolve(313);
const p4 =Promise.resolve(p3);
p4.then((values)=> console.log(values));
console.log(`p3 === p4 ? ${p3 === p4}`);


