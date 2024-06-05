// program to find the factors of 24


const input = require('prompt-sync')()
let num= parseInt(input("Enter a positive Number:"))

console.log(`The factors of ${num} is:`)

// looping through 1 to num
for(let i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
        console.log(i);
    }
}