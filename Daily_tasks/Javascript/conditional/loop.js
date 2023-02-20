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


