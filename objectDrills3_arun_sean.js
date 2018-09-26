'use strict'; 

const loaf = {
  flour : 300,
  water : 210, 
  hydration : function(){
    return this.flour * 100; 
  }
}; 


console.log(loaf.flour); 
console.log(loaf.water); 
console.log(loaf.hydration()); 

const cheese = {
  foo: 'foo',
  bar: 'bar',
  fum: 'fum',
  quux: 'quux',
  spam: 'spamValue'
};

for (const property in cheese) {
  console.log(`${property}: ${cheese[property]}`);
}
