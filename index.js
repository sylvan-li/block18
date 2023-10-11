/* unit tests 
#1. a function called "multiplication" that returns the product of two input numbers  

input a should be a number 
input b should be a number 
both inputs should not be null or undefined 

happy paths: 
- expect input to be only two variables  (get two numbers ) 
- expect the two variables to be numbers 
- multiply the two variables together 
- expect outcome to be a single number
- expect outcome to be the return the product as an integer  


edge cases/unhappy paths: 
- expect user input of a non-integer (strings, booleans...) to be an error
what happens when user produces unexpected inputs: 
    - we would prompt user to re-enter a correct input 
- expect recieving input of one variable to produce an error  
- expect recieving no variablels to produce an error 
- expect recieving more than two variables to produce an error  
- more than two arguments are given will produce an error 


#2. a function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.

ex. concatOdds([3,2,1], [9,1,1,1,4,15,-1]) should result in [-1,1,3,9,15]

what should happen with unexpected inputs: 
what kinds of unexpected inputs should we worry about 
- expect recieving float inputs to prompt user for an integer 



what should happen when there are multiples of the same odd number in the arrays? 
- expect recieving two more */

/* when the user [does something with some parameters], [ some thing should happen] */

//#2 contcatodds class example 
/*input a should be a number 
input b should be a number 
both inputs should not be null or undefined 
 expect concatOdds([1,2,3], [4,5,6]) to be an array - this could be a unit test 
expect concatOdds([1,3,4,7], [2,4,6,8]) to be [1,3,5,7] - this is another unit test
expect concatOdds([1,3,4,8,5] [2,4,7,8]) to be [1,3,5,7] - this is another unit test
expect concatOdds([1,3,4,8,5], "hello world!") to be an error 
expect arguments of concatOdds to be arrays */

//#3 
/*A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest. */

/*
User adds item to cart 
- user clicks checkout feature
- if no items in shopping cart - prompt "there are no items " and direct to browse

Shopping cart prompts user to login or checkout as guest. 

- if guest checkout - present item and total price 
- proceed to payment page 
- enter credit card information 
- confirm payment 
- complete checkout process 

- if guest chooses to create an account, re-direct to create an account
- proceed to shopping cart
- prompt user to enter payment info 
- confirm payment 
- complete checkout process 

if guest chooses to log in to account 
- verify that the user is prompted with options to crete an account or login 
- user clicks on "log in" 
- enter log-in information, click log-in button 
- verify that user is redirected to payment page 
- confirm payment 
- complete checkout process 
*/
