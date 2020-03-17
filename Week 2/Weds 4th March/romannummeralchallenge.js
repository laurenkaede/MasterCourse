/* Converting from Numbers to Romans Challenge - Completed.

The goal of this exercise is to convert regular Arabic numbers to Roman numerals */

function arabicToRoman (num) {
    let arabicNumber = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNumeral = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ]; 

    let romanConversion = "";

    for (let i = 0; i < arabicNumber.length; i++) {
        while (arabicNumber[i] <= num) {
            romanConversion += romanNumeral[i];
            num -= arabicNumber[i];
        }
    }

    return console.log (romanConversion); 
};

arabicToRoman(100); // Returns C
arabicToRoman(50); // Returns L
arabicToRoman(14); // Returns XIV
arabicToRoman(2000); // Returns MM
arabicToRoman(18); // Returns XVIII



/* Code Explanation

Firstly, I created two arrays. The first array is a roman numeral template for conversion called romanNumeral. The second array corresponds to the first array by matching the arabic numbers and is called arabicNumber. I then created an empty string variable, romanConversion, which will house the final converted roman number.

Using a for loop, the code then loops through the values of the arabicNumber array. The code continues to loop until the value at the current index fits into num.

Next, the code adds the roman numeral and decreases num by the arabic number equivalent.

Finally, the code returns the value of romanConversion. */

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//