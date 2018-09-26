'use strict'; 

function createMyObject(){ 
  return {foo: 'bar', 
    answerToUniverse: '42', 
    'olly olly' : 'oxen free', 
    sayHello : function() { return 'hello'; }
  }; 
}

const obj = createMyObject(); 
console.log(obj.sayHello()); 
