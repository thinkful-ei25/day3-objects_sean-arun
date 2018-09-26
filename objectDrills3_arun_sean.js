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

// const comedian = {name: 'Jim Carey', jobTitle: 'Pet Detective'};
// const hobbit = {name: 'Frodo', jobTitle: 'Keep of the Ring', boss : 'gandalf'};
// const demonHunter = {name: 'Wynonna Earp', jobTitle: 'Holder of Peacekeeper', boss : 'Dolls'};

// const people = [hobbit, comedian, demonHunter];

// people.forEach(person => {
//   if (person.boss) console.log(`${person.jobTitle} ${person.name} reports to ${person.boss} `);
//   else console.log(`${person.jobTitle} ${person.name} doesn't report to anybody`); 
// });

const comedian = {name: 'Jim Carey', jobTitle: 'Pet Detective'};
const hobbit = {name: 'Frodo', jobTitle: 'Keep of the Ring', boss : comedian};
const demonHunter = {name: 'Wynonna Earp', jobTitle: 'Holder of Peacekeeper', boss : hobbit};

const people = [hobbit, comedian, demonHunter];

people.forEach(person => {
  if (person.boss) console.log(`${person.jobTitle} ${person.name} reports to ${person.boss.name} `);
  else console.log(`${person.jobTitle} ${person.name} doesn't report to anybody`); 
});

function decode(word) {
  const cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };

  // const index = cipher[word[0]];
  // if (!index) {
  //   return ' ';
  // }
  
  // return word[index];
  return cipher[word[0]] ? word[cipher[word[0]]] : ' ';
}

function decodeWords(sentence) {
  let words = sentence.split(' ');
  words = words.map(word => decode(word));
  return words.join('');
}

const example = 'craft block argon meter bells brown croon droop';
console.log(decodeWords(example));
