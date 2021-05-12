var userInput = require("readline-sync");

/*@Description- Prime factorization of the number taken from user.
* calculate the prime factorization for that number.*/
function primeFactors(number) {
    const factors = [];
    for (i = 2; i <= userInput; i++) {
        if (userInput % i == 0) {
            var flag = 0;
            for (j = 2; j * j <= i; j++) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0) {
                factors.push(i);
            }
        }
    }
    return factors
}
userInput = parseInt(userInput.question("Enter number: "));
console.log("Prime factors is:" + userInput + " are: " + primeFactors(userInput));