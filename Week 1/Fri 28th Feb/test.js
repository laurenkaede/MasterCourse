class Animal {
    constructor (name) {
        this._name = name;
        this._hunger = 0; // 0 for no hunger
        this._happiness = 10; // 0 is not happy
        this._thirst = 0;
    }

    play() {
        this._hunger+2;
        this._happiness+2;
        this._thirst+2;
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



while (dog._happiness <= 10 || dog._happiness < 0 && dog._hunger >= 0, dog._thirst >= 0) {
    if (activity == "play") {
        dog.play();
        alert(`Your ${dog._name} is now playing and their happiness level is ${dog._happiness}. Playing has now increased your ${dog._name}'s hunger and thirst. Their hunger level is now ${dog._hunger} and their thirst level is now ${dog._thirst}.`);
        activity = prompt("What would you like your pet to do? Play, eat or drink?");
    } 
    if (activity == "eat") {
        dog.eat();
        alert(`Your ${dog._name} is now eating and their hunger level is now ${dog._hunger}. Eating has now decreased your ${dog._name}'s happiness as they are now bored. Their happiness level is now ${dog._happiness}.`);
        activity = prompt("What would you like your pet to do? Play, eat or drink?");
    }
    if (activity == "drink") {
        dog.drink();
        alert(`Your ${dog._name} is now drinking and their thirst level is now ${dog._thirst}. Drinking has now decreased your ${dog._name}'s happiness as they are now bored. Their happiness level is now ${dog._happiness}.`);
        activity = prompt("What would you like your pet to do? Play, eat or drink?");
     
    }

    if (dog._hunger >= 10) {
        alert("Your pet is malnourished and is now dead. May he rest in peace. Bless him.");
    } 
    
    if (dog._happiness <= 0) {
        alert("Your pet is depressed and is now dead. May he rest in peace. Bless him.");
    } 
    
    if (dog._thirst >= 10) {
        alert("Your pet is dehydrated and is now dead. May he rest in peace. Bless him."); 
    } 
}

