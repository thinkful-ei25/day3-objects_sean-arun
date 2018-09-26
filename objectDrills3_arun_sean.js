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

function characterMixin(obj){ 
  let attrs = 'dont look at me!'; 
  function addMixin(){ 
    return Object.assign(this, Character, {
      getPrivate : function () { 
        return attrs; 
      }, 
      setPrivate : function (args){ 
        attrs = args; 
      }
    }); 
  }
  
  return addMixin.call(obj); 

} 

const characters = [
  {name : 'Gandalf the White', nickname: 'gandalf', race: 'Wizard', origin: 'Middle Earth', attack :10, defence : 6, weapon : 'wizard staff'}, 
  {name : 'Bilbo Baggins', nickname : 'bilbo', race : 'Hobbit', origin : 'TheShire', attack: 2, defence: 1, weapon: 'the Ring'}, 
  
];
characters.forEach(characterMixin); 

characters[0].setPrivate('look at me privately not publicly'); 
characters.forEach(character => console.log(character.getPrivate())); 

//console.log(characters.find(character => character.nickname === 'gandalf').describe()); 

const hobbits = characters.filter(character => character.race === 'Hobbit'); 
//console.log(hobbits); 

const highAttackCharacters = characters.filter(character => character.attack > 5); 
//console.log(highAttackCharacters); 


// const character = createCharacter('feline', 'kitty', 'cat', 'furry place', 'scratch', 'hide'); 
// console.log(character.describe()); 

// BONUS 8:
const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  // if every property is query is the same in object, return the first such object

  return arr.find(obj => Object.keys(query).every(key => query[key] === obj[key]));
}

console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
