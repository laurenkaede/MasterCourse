/* Convert given code snippet from  class/subclass to prototype. */

let Animal = function (name, hunger, thirst) {
    this.name = name;
    this.hunger = hunger;
    this.thirst = thirst;
};

Animal.prototype.getReport = function () {
    return `Name: ${this.name} / Hunger: ${this.hunger} / Thirst: ${this.thirst}`
    // Returns - Name: Bunnykins / Hunger: 65 / Thirst: 78
};

let bunnykins = new Animal("Bunnykins", 65, 78);
console.log(bunnykins.getReport());

let Bunny = function (name, hunger, thirst, lovesCarrot, favFood) {
    Animal.call(this, name, hunger, thirst);
    this.lovesCarrot = lovesCarrot;
    this.favFood = favFood;
};

Bunny.prototype = Object.create(Animal.prototype);

Bunny.prototype.foodPreferences = function () {
    return `${this.name} -> ${this.lovesCarrot} -> ${this.favFood}`
};

let rosie = new Bunny("Rosie", 54, 88, true, "lettuce");

console.log(rosie.getReport());
// Returns - Name: Rosie / Hunger: 54 / Thirst: 88

console.log(rosie.foodPreferences());

// Returns - Rosie -> true -> lettuce

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//