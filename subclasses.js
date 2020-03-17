class Car {
    constructor(HP, seats, safety) {
        this.horsepower = HP;
        this.numberOfSeats = seats;
        this.carSafety = safety;
    }

    drive() {
        console.log("This car can drive.");
    }

}

let toyota = new Car (99, 4, 6); 
// the above is the flow. A new car with 3 values - same order and sequence. 99 is HP, 4 is seats and 6 is safety.

// use get to grab something from constructor

// console.log(toyota.horsepower); // returns 99 
// console.log(toyota.carSafety); // returns 6
// console.log(toyota.numberOfSeats); // returns 4

let mercedes = new Car (180, 5, 8);

// toyota.drive();
// mercedes.drive();


// below is a subclass of the class Car. Extends is a JS keyword. It's an inheritance of the parent class.
// sub class must always have the same constructor as parent class (more can be added to sub class, though).
// super keyword copies the this._____ from the class to the sub class.

class Luxurycar extends Car {  
    constructor(HP, seats, safety, speed) {
        super(HP, seats, safety);
        this.carSpeed = speed;
    }

    runFast() {
        console.log("This car can run reaaaaaaally fast.");
    }

}

let ferrari = new Luxurycar (200, 2, 6, 180);

console.log(ferrari.horsepower);
console.log(ferrari.numberOfSeats);
console.log(ferrari.carSafety);
console.log(ferrari.carSpeed);

ferrari.drive();
ferrari.runFast();

// Functions within the sub class cannot be called for the parent class.