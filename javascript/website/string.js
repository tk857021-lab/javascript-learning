console.log('hello' + " " + "everyone")
/* 
  this is a typeof fuction which use to see what type 
  of data it is like string and number
*/
console.log(typeof 2)

console.log(typeof 'hell')

/* 
 this is type error if we try to add string and num for 
 something like calculate price in $ so it does not work 
 it is how js work
*/

console.log( '$' + 382 + 38)
/* 
but you can do this by open brecit and close bracit 
*/

console.log( '$' + (Math.round((((2090 + 750)*.1)/100))) )


console.log( '$' + ((((2090 + 750)*.1)/100)) )


/* if you want to calulate items */

console.log( 'item (' + (1+1) + '):$' + ((((2090 + 750)*.1)/100)) )

/* 
string can use '' or  ""
you use both according to the 
use case
like ' i'm learning javascript  '
if you use '' only it show error  you can also use escape character 
\'  or \" this tell computer to ignore character
and \n this creat a next line 

*/


console.log( " i'm learning javascript  " )


console.log( ' i\'m learning javascript  ' )


console.log( `item (${1+1}): ${(2095+750)/100}`) 