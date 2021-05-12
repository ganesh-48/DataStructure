/*@Description- Calculatee a repeated twice number.
* Store Repeated number into a array.
* Show that array.*/
let Array =[];
for (let i=1 ;i <100; i++)
{
    let rev = ( i % 10 );
    reverse = Math.floor( i / 10 );
    if ( rev == reverse )
    {
        console.log("Units and same digits number "+ i + " is same Numbers");
        Array.push(i);
    }

}
console.log("Array is "+Array);