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


const today = {
  meals : ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'] 
}; 

console.log(today.meals[3]); 

const hobbit = {name: 'Frodo', jobTitle: 'Keep of the Ring'};
const comedian = {name: 'Jim Carey', jobTitle: 'Pet Detective'};
const demonHunter = {name: 'Wynonna Earp', jobTitle: 'Holder of Peacekeeper'};

const people = [hobbit, comedian, demonHunter];

people.forEach(person => {
  console.log(`${person.name}: ${person.jobTitle}`);
});
