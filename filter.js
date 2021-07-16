/** filter
 * Creates a new array
 * Loops through an array
 * Runs a callback function on each value in the array
 * If the callback function returns true, that value is pushed to the new array
 * If the callback function returns false, that value will not be included in the new array
 * the result of the callback will always be evaluated into a boolean
 */

// Example
 let letters = ["a", "b", "c", "b", "c"];

 letters.filter(function(value, index, array){
   return value === "b";
 });
 
 // ["b", "b"]


 // Another Example
 let friends = [
   { name: "Amanda" },
   { name: "Tommy" },
   { name: "Nathan" },
   { name: "Pat" }
 ];
 friends.filter(function(value, index, array){
     return value.name.includes("n")
 });
 
 // [{name: "Amanda"},{name: "Nathan"}];




 /** How does it work? */
 function filter(array, callback){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
      if(callback(array[i], i, array)){
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
  /** 
   * Creates a new array
   * Iterates through an array
   * Runs a callback function on each value in the array
   * If the callback function returns true, that value will be added to the new array
   * If the callback function returns false, that value will be ignored from the new array
  */




   /** Using Filter In A Function */
   function fourOrLessNames(names){
    return names.filter(function(value){
      return value.length <= 4;
    });
  }
  
  fourOrLessNames(['Fido', 'Blue', 'Rascal']); // ['Fido', 'Blue']
  
  
  function onlyInstructors(arr) {
    return arr.filter(function(value) {
      return arr.isInstructor;
    });
  }
  
  onlyInstructors([
    { name: "Colt", isInstructor: true },
    { name: "Beth", isInstructor: false },
    { name: "Daniel" }
  ]); // [{name: "Colt", isInstructor: true}]



  /** When You Would Use Filter
   * You want to “transform” an array into another array of the same length or smaller length depending on a condition
   * You want to see how many elements in an array satisfy a certain condition
   * You do not want to modify the existing array you are filtering
   */

  /** Recap
   * filter creates a new array
   * filter runs a callback on each value
   * 
   * if the result of the callback returns true, that value is added to the new array
   */




  function myFilter(arr, cb) {
      let filteredArray = [];
      for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i], i, arr)) { 
            filteredArray.push(arr[i]);
            return true;
        }
      }
      return filteredArray;
  }