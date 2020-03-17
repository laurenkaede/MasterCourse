let holiday = "Scunthorpe";

console.log(`We are going on holiday to ${holiday}.`);

function chooseHoliday() {
    // let holiday = "Benidorm";

    console.log(`Let's go to ${holiday}!`);
}

chooseHoliday();

// When creating a variable within a function, it can be called even if that variable has already been assigned outside of the function.

// If there's no variable defined inside of a function, it will look outside to the global scope and use that defined variable.