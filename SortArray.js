/*@Description- Find the second largest and second smallest number.
* Using for loop calculated the 10 random 3 digit number.
* And it stored into random array.*/

var randomArray = new Array();
for (let i = 0; i <=10; i++ ) {
    randomArray[i] = Math.floor( 100 + Math.random()  * 900 );
}

randomArray.sort();
console.log(randomArray);
console.log("Second Largest Number is: "+randomArray[randomArray.length - 2]+ "\nSecond Smallest Number is: "+randomArray[1]);