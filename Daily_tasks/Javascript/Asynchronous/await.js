//async
function value(x){
    return new Promise((resolve)=>{
        setTimeout(()=>{ resolve(x);},1000);
    })
} 
const a = async function(x){
 const b = await value(12);
 const c = await value(30);
 return x+b+c;
}

a(10).then((v)=> { console.log(v)});


//await
function res(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 3000);
    });
  }
  
  async function f1() {
    const x = await res(10);
    console.log(x);
  }
  
  f1();


  async function can(name) {
    console.log(name, "start");
    await console.log(name, "middle");
    console.log(name, "end");
  }
  
  can("First");
  can("Second");
  

  async function f() {
    const y = await 20;
    console.log(y);// 20
    const obj = {};
    console.log((await obj) === obj);// true
  }
  
  f();

