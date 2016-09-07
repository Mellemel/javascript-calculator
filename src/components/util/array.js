/**
 * Count the number of a certain element in an array
 * 
 * @param {any} array
 * @param {any} thing
 * @returns integer
 */
function count(array, thing) {
  var count = 0;
  array.forEach((element)=> {
    if (thing === element){
      count++;
    }
  });
  console.log(count);
  return count;
}

export {count};