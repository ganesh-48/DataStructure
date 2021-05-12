/*@Description- Find the second largest and second smallest number.
* Using for loop calculated the 10 random 3 digit number.
* And it stored into random array.
* useing for loop find the second largest & smallest number.*/
var randomArray = new Array();
for (i = 0; i <= 10; i++ ) {
    randomArray[i] = Math.floor(100 + Math.random()  * 900)
}

console.log(randomArray);
firstLargestNumber = Math.max.apply(null, randomArray);
firstSmallestNumber = Math.max.apply(null, randomArray);

secondLargestNumber = firstSmallestNumber;
secondSmallestNumber = firstLargestNumber;

for ( let random of randomArray ) {
    if ( random < firstLargestNumber && random > secondLargestNumber )
        secondLargestNumber = random;
    if ( random < firstSmallestNumber && random > firstSmallestNumber )
        firstSmallestNumber = random;
}
console.log("Second Largest Number is: "+secondLargestNumber+"\nSecond Smallest Number is: "+secondSmallestNumber);