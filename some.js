/** some
 * Iterates through an array
 * Runs a callback on each value in the array
 * If the callback returns true for at least one single value, return true
 * Otherwise, return false
 * the result of the callback will always be a boolean
 */



//  An Example
 let numbers = [1,2,3];
 
 numbers.some(function(value, index, array){
   return value < 3;
 });
 
 // true
 
 let numbers = [1,2,3];
 
 numbers.some(function(value, index, array){
   return value > 10;
 });
 
 // false



//  How Does It Work?
 function some(array, callback){
   for(let i = 0; i < array.length; i++){
     if(callback(array[i], i, array) === true){
       return true;
     }
   }
   return false;
 }
 /**
  * Iterates through an array
  * Runs a callback on each value in the array
  * If the callback returns true for at least one single value, return true
  * Otherwise, return false
  */



 /** When You Would Use Some
  * You need to determine if at least one value in an array exists and you have to determine this by using a callback (not includes/indexOf)
  * A simple alternative to using filter and seeing if the array contains at least one element
  */