/** forEach()
 * -Loops through an array
 * -Runs a callback function for each value in the array  and then returns undefined 
 * -forEach will always return undefined - no matter what
 */


let arr = [1,2,3];

arr.forEach( (value, index, array) => {
    console.log(value);
})

// VS.

function forEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

function myForEach(arr, cb) {
    for (item of arr) {
        cb(item);
    }
}

myForEach(arr, (item) => {
    let total = 0;
    total += item;
    console.log(total += item);
})

myForEach(arr);

arr.forEach( (item, i) => {
    let total = 0;
    total += item;
    console.log(total += item);
})

// BOTH of the above return undefined

/** When You Would Use forEach
 * You want to iterate over an array, but the return value of your callback is not important
 * Almost all of the time there are better options… 
 */


/** Recap
 * forEach iterates over an array, runs a callback on each value and
 * forEach returns undefined
 */