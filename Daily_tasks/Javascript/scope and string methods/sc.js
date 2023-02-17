var x = 0; 

console.log("type of z", typeof z);

function a() {
  var y = 2; 

  console.log('x,y', x, y); 

  function b() {
    x = 3; 
    y = 4; 
    z = 5; 
  
  }

  b(); 
  console.log('x, y, z', x, y, z);
}

a(); 
console.log('x, z', x, z);
console.log('typeof y', typeof y);
