/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// JS III project code:
  function GameObject(gameAttributes) {
    this.createdAt = gameAttributes.createdAt;
    this.name = gameAttributes.name;
    this.dimensions = gameAttributes.dimensions;
  }
  
  GameObject.prototype.destroy = function() {
    return `${this.name} was removed from the game.`;
  }

  //Refactored Code:  
  class GameObject{
    constructor(gameAttributes){
    this.createdAt = gameAttributes.createdAt;
    this.name = gameAttributes.name;
    this.dimensions = gameAttributes.dimensions;
    }
    destroy() {
        console.log(`${this.name} was removed from the game.`);
    }
}

  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

  // JS III Project Code:
  function CharacterStats(characterAttributes) {
    this.healthPoints = characterAttributes.healthPoints;
    GameObject.call(this, characterAttributes);
  }
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  CharacterStats.prototype.takeDamage = function() {
    return `${this.name} took damage.`;
  }

//Refactored Code:
class CharacterStats extends GameObject {
    constructor(characterAttributes) {
    super(characterAttributes);
    this.healthPoints = characterAttributes.healthPoints;
    }
    takeDamage() {
        console.log(`${this.name} took damage.`);
    }
}


  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */

  // JS III Project Code:
   function Humanoid(humanoidAttributes) {
     this.team = humanoidAttributes.team;
     this.weapons = humanoidAttributes.weapons;
     this.language = humanoidAttributes.language;
     CharacterStats.call(this, humanoidAttributes);
   }
  
   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
   Humanoid.prototype.greet = function() {
     return `${this.name} offers a greeting in ${this.language}.`;
   }

   // Refactored Code:
    class Humanoid extends CharacterStats {
     constructor(humanoidAttributes){
     super(humanoidAttributes);
     this.team = humanoidAttributes.team;
     this.weapons = humanoidAttributes.weapons;
     this.language = humanoidAttributes.language;
   }
   greet() {
       console.log(`${this.name} offers a greeting in ${this.language}.`);
   }
}



   const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.