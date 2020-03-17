//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
                                                   // ~~~ Challenges ~~~ //
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// /* Activity:
// Let’s create a class called Cars for a car parking
// company.

// This will allow you to store information of: car
// registration number, number of hours parked and total
// amount charged. (Say £1.50 per hour?)

// The first car entered the car park, parked for 5 hours
// and ready to pay. Display this information so the driver
// can pay for his/her parking fee. */



// class Car {
//     constructor(regnum){
//     this._regnum = regnum;
//     this._hours = 0;
//     this._charge = 0.00;
//     }

//     get regnum(){
//     return this._regnum;
//     }

//     get hours(){
//     return this._hours;
//     }

//     get charge(){
//     return this._charge;
//     }

//     increaseHours(){
//     this._hours++;
//     this._charge += 1.50;
//     }  
// }

// const pay = (reg, hr) => {
//     const car = new Car(reg);
//     for (i = 0; i < hr; i++){
//     car.increaseHours();
//     }
// }

// pay ("MT03 PFV", 5);


// /* Activity(1): Car Park
// Let’s continue with our car park project.

// Add a subclass for staff, so that staff can provide their
// staff number, and credits they have left to pay for the
// car park fees.

// Given a staff member parked for 5 hours as before,
// show how much it will be charged and remaining
// balance. */

// class Staff extends Car {
//     constructor (regnum, staffIdentifyer, staffCredits) {
//         super (regnum);
//         this.staffNum = staffIdentifyer;
//         this.credits = staffCredits;

//     }

//    credits() {
//         return this.credits;
//     }

// }

// let staffMember = new Staff ("MX-RTY-HHF", 45565, 8);

// for (let i=0; i < 3; i++ ) {
//     staffMember.increaseHours();
// }

// let balance = staffMember.credits -  staffMember.charge;

// console.log(`My final charge for ${staffMember.hours} hours is going to be ${staffMember.charge} `);
// console.log(`I have ${balance} credits left`);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/* Activity(2): Cyber Pet
Cyber pet time!

User selects the kind of animal they’d like (dog, cat,
rabbit) and you have to play with it, feed it, give it
drinks etc.

There should be consequences across the board
– if you don’t play, it gets bored, if you do, it’s happy,
but gets thirsty, that kind of thing. */


// class Animal {
//     constructor (name){
//         this._name = name;
//         this._happiness = 0;
//         this._hunger = 10;
//         this._thirst = 10;
//     };

//     get name() {
//         return this._name;
//     };
    
//     get happiness() {
//         return this._happiness;
//     };

//     get hunger() {
//         return this._hunger;
//     };

//     get thirst() {
//         return this._thirst;
//     };


//     play() {
//         this._happiness += 1;
//         this._thirst -= 1;
//         this._hunger -= 1;
//     };

//     eat() {
//         this._hunger -= 1;
//     };

//     drink() {
//         this._thirst -= 1;
//     };
    

 

// }

// // Dog

// class Dog extends Animal {
//     constructor (name) {
//         super (name);
//     }
// }

// const ruby = new Dog ("Ruby");
// const roxy = new Dog ("Roxy");
// const raymond = new Dog ("Raymond");

// const foodDog = () => {
//     ruby.eat();
//     roxy.eat();
//     raymond.eat();
// }

// const fluidDog = () => {
//     ruby.drink();
//     roxy.drink();
//     raymond.drink();
// }

// const playGameDog = () => {
//     ruby.play();
//     roxy.play();
//     raymond.play();
// }


// foodDog();
// fluidDog();
// playGameDog();


// // Cat

// class Cat extends Animal {
//     constructor (name) {
//         super (name);
//     }
// }

// const kira = new Cat ("Kira");
// const kyle = new Cat ("Kyle");
// const kirsty = new Cat ("Kirsty");

// const foodCat = () => {
//     kira.eat();
//     kyle.eat();
//     kirsty.eat();
// }

// const fluidCat = () => {
//     kira.drink();
//     kyle.drink();
//     kirsty.drink();
// }

// const playGameCat = () => {
//     kira.play();
//     kyle.play();
//     kirsty.play();
// }

// foodCat();
// fluidCat();
// playGameCat();


// // Rabbit

// class Rabbit extends Animal {
//     constructor (name) {
//         super (name);
//     }
// }

// const moxie = new Rabbit ("Moxie");
// const maggie = new Rabbit ("Maggie");
// const mark = new Rabbit ("Mark");

// const foodRabbit = () => {
//     moxie.eat();
//     maggie.eat();
//     mark.eat();
// }

// const fluidRabbit = () => {
//     moxie.drink();
//     maggie.drink();
//     mark.drink();
// }

// const playGameRabbit = () => {
//     moxie.play();
//     maggie.play();
//     mark.play();
// }

// foodRabbit();
// fluidRabbit();
// playGameRabbit();


// console.log(moxie);


// if (happiness >= 5 && hunger >= 5 && thirst >= 5) {
//     console.log (`Yay you're taking great care of ${this._name}!`);      
// } 
// else if (happiness >= 5 && hunger >= 5 && thirst < 5) {
//     console.log (`${this._name} is thirsty! Make sure you give ${this._name} a drink so that they don't become dehydrated.`);
// } 
// else if (happiness >= 5 && hunger < 5 && thirst >= 5) {
//     console.log (`${this._name} is hungry! Make sure you give ${this._name} some food so that they don't become nutritionally deficient`);
// } 
// else if (happiness < 5 && hunger >= 5 && thirst >= 5) {
//     console.log (`${this._name} is bored! Make sure you play with ${this._name} so that they get enough exercise and don't become unhappy`);
// }
// else if (happiness < 5 && hunger < 5 && thirst >= 5) {
//     console.log (`${this._name} is bored and hungry! Make sure you play with ${this.name} and give them some food so that they don't get sick.`)
// }
// else if (happiness < 5 && hunger >= 5 && thirst < 5) {
//     console.log (`${this._name} is bored and thirsty! Make sure you play with ${this.name} and give them some drink so that they don't get sick.`)
// }
// else if (happiness >= 5 && hunger < 5 && thirst < 5) {
//     console.log (`${this._name} is hungry and thirsty! Make sure you give ${this.name} some food and drink so that they don't get sick.`)
// } else {
//     console.log (`${this._name} is at risk of dying. Please ensure that you give food and drink to ${this._name} and spend time playing with them.`)
// }



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// Example

class Animal {
    constructor (name) {
        this._name = name;
        this._hunger = 0; // 0 for no hunger
        this._happiness = 10; // 0 is not happy
        this._thirst = 0;
    }

    play() {
        this._hunger++;
        this._happiness+2;
    }

    eat() {
        this._hunger--;
        this._happiness--;
    }

    drink() {
        this._thirst--;
        this._happiness--;
    }


}

let dog = new Animal ("dog");


let activity = prompt ("What would you like your pet to do? Play, eat or drink?");



while (dog._happiness <= 10) {
    if (activity == "play") {
        dog.play();
        alert(`Your ${dog._name} is now playing and their happiness level is ${dog._happiness}. Playing has now increased your ${dog._name}'s hunger. Their hunger level is now ${dog._hunger}.`);
        activity = prompt("What would you like your pet to do? Play, eat or drink?");
    } 

    if (dog._hunger >= 10) {
        alert("Your pet is malnourised and is now dead. May he rest in peace. Bless him.");
    } if (dog._happiness <= 0) {
        alert("Your pet is depressed and is now dead. May he rest in peace. Bless him.");
    } if (dog._thirst >= 10) {
        alert("Your pet is dehydrated and is now dead. May he rest in peace. Bless him."); 
    } 
}



while (dog._hunger >= 0) {
    if (activity == "eat") {
        dog.eat();
        alert(`Your ${dog._name} is now eating and their hunger level is now ${dog._hunger}. Eating has now decreased your ${dog._name}'s happiness as they are now bored. Their happiness level is now ${dog._happiness}.`);
        activity = prompt("What would you like your pet to do? Play, eat or drink?");
    }

    if (dog._hunger >= 10) {
        alert("Your pet is malnourised and is now dead. May he rest in peace. Bless him.");
    } if (dog._happiness <= 0) {
        alert("Your pet is depressed and is now dead. May he rest in peace. Bless him.");
    } if (dog._thirst >= 10) {
        alert("Your pet is dehydrated and is now dead. May he rest in peace. Bless him."); 
    } 
}



while (dog._thirst >= 0) {
    if (activity == "drink") {
        dog.drink();
        alert(`Your ${dog._name} is now drinking and their thirst level is now ${dog._thirst}. Drinking has now decreased your ${dog._name}'s happiness as they are now bored. Their happiness level is now ${dog._happiness}.`);
        activity = prompt("What would you like your pet to do? Play, eat or drink?");
     
    }

    if (dog._hunger >= 10) {
        alert("Your pet is malnourised and is now dead. May he rest in peace. Bless him.");
    } if (dog._happiness <= 0) {
        alert("Your pet is depressed and is now dead. May he rest in peace. Bless him.");
    } if (dog._thirst >= 10) {
        alert("Your pet is dehydrated and is now dead. May he rest in peace. Bless him."); 
    } 
}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
