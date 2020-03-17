// Object

// Below - too much repeating code, so we use classes instead.

// let employee1 = {
//     name: "John",
//     job: "Uber Driver",
//     email: "john@email.com"
// }

// let employee2 = {
//     name: "Sarah",
//     job: "Waiter",
//     email: "sarah@email.com"
// }

// let employee3 = {
//     name: "David",
//     job: "Software Engineer",
//     email: "david@email.com"
// }

// Above - too much repeating code, so we use classes instead.

// Classes are templates for objects ~~~
// Start a class with a capital letter ~~~
// constructor() is an embedded function ~~~

// this = key, value = name, job & email ~~~

// class Employee {
//     constructor(userName, userJob, userEmail) {
//         this.name = userName;
//         this.job = userJob;
//         this.email = userEmail;
//     }

//     twerk() {
//         console.log(`${this.name} knows how to twerk.`);
//     }

// }

// let employee1 = new Employee("John", "Chef", "john@email.com");
// let employee2 = new Employee("Ian", "CEO", "ian@gmail.com");
// let employee3 = new Employee("David", "Software Engineer", "david@email.com");

// console.log(employee1.name); // Returns - John
// console.log(employee1.email); // Returns - john@email.com

// employee1.twerk();
// employee2.twerk();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

class BankUser {
    constructor(userName, userPass) {
        this.userServer = "John";
        this.passServer = 12345; // from database
        this.balance = 200;

        this.userInput = userName; // what user is inputting
        this.passInput = userPass;
    }

    get userBalance() {
        if (this.userServer == this.userInput && this.passServer == this.passInput) {
            return this.balance;
        } else {
            return "Sorry your login details are incorrect.";
        }
        
    }

    set shopping (cost) {
        this.balance = this.balance - cost;
    }
}

let john = new BankUser("John", 12345);

john.shopping = 20;

console.log(john.userBalance);