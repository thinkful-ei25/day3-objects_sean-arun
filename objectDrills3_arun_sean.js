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



// function createCharacter(name, nickname, race, origin, attack, deffence, weapon = 'knuckles') {
//   return {
//     name, 
//     nickname, 
//     race, 
//     origin, 
//     attack, 
//     deffence,
//     weapon, 
//     describe: function () {
//       return `${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}`;
//     }, 
//     evaluateFight: function(opponent) { 
//       const damageInflicted =this.attack - opponent.deffence;
//       const damageRecieved = opponent.attack - this.deffence; 
//       return `Your opponent takes ${damageInflicted} and you recieve ${damageRecieved}`; 
//     }
//   };
// }

const Character = { 
  describe: function () {
    return `${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}`;
  }, 
  evaluateFight: function(opponent) { 
    const damageInflicted =this.attack - opponent.deffence;
    const damageRecieved = opponent.attack - this.deffence; 
    return `Your opponent takes ${damageInflicted} and you recieve ${damageRecieved}`; 
  }
}; 

function createCharacter(name, nickname, race, origin, attack, deffence, weapon = 'knuckles') { 
  return Object.assign(Object.create(Character), {name, nickname, race, origin, attack, deffence, weapon});  
}
//const createCharacter = (character) => Object.assign(Object.create(Character))

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'wizard staff'), 
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'TheShire', 2, 1, 'the Ring'), 
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'), 
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'), 
  createCharacter('Legoals', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow')
]; 

//const frodo = Object.create(Character, {name : 'f'})
characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rvendell', 5, 3, 'Hadhafang')); 
console.log(characters.find(character => character.nickname === 'aragorn').describe()); 

const hobbits = characters.filter(character => character.race === 'Hobbit'); 
console.log(hobbits); 

const highAttackCharacters = characters.filter(character => character.attack > 5); 
console.log(highAttackCharacters); 


// const character = createCharacter('feline', 'kitty', 'cat', 'furry place', 'scratch', 'hide'); 
// console.log(character.describe()); 