/** every
 * Iterates through an array
 * Runs a callback on each value in the array
 * If the callback returns false for any single value, return false
 * Otherwise, return true
 * the result of the callback will always be a boolean
 */

//  An Example
 let numbers = [1,2,3];
 
 numbers.every(function(value, index, array){
   return value > 0;
 });
 
 // true
 let numbers = [1,2,3];
 
 numbers.every(function(value, index, array){
   return value > 2;
 });
 
 // false



 /** How Does It Work?
  * Iterates through an array
  * Runs a callback on each value in the array
  * If the callback returns false for any single value, return false
  * Otherwise, return true
  */
  function every(array, callback){
    for(let i = 0; i < array.length; i++){
      if(callback(array[i], i, array) === false){
        return false;
      }
    }
    return true;
  }



//   Using Every In A Function
  function allVowels(str){
    return str.split('').every(function(value){
      return "aeiou".includes(value)
    });
  }
  
  allVowels('awesome') // false
  allVowels('aiaieoeoiu') // true
  function allIntegers(arr){
    return arr.every(Number.isInteger);
  }
  
  allIntegers([1,2,3,4,4,4,4]) // true
  allIntegers([5,1,4,3,2.2]) // false



  /** When You Would Use Every
   * You need to determine if every value in an array exists and you have to determine this by using a callback
   * A simple alternative to using filter and seeing if the filtered array is of the same length as the original arrayÍ
   */