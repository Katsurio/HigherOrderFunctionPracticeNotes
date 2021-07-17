/** findIndex
 * Iterates through an array
 * Runs a callback on each value in the array
 * If the callback returns true for any single value, return the index at which that value is found
 * Otherwise, return -1
 */

//  An Example
let arr = [1, 2, 3]

arr.findIndex(function (value, index, array) {
  return value < 2
}) // 0

let arr = [1, 2, 3]

arr.findIndex(function (value, index, array) {
  return value > 3
}) // -1

/** How Does It Work?
 * Iterates through an array
 * Runs a callback on each value in the array
 * If the callback returns true for any single value, return the index at which that value is found
 * Otherwise, return -1
 */

function findIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array) === true) {
      return i
    }
  }
  return -1
}

//   Using Findindex In A Function
function findPositionOfBoolean(list) {
  return list.findIndex(function (value, index, array) {
    return typeof value === 'boolean'
  })
}

findPositionOfBoolean([1, 3, false, true]) // 2
findPositionOfBoolean(['no booleans', 'around', 'these parts']) // -1

/** When You Would Use Findindex
 * You need to determine the index of a value in an array if it exists and you have to determine this by using a callback
 * A better version of indexOf to be used when a callback is necessary
 */
