/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  let count = 0;
  for (let i=0; i<preferences.length; i++){
    let number = preferences[i] - 1;
    let secondnumber = preferences[number] - 1;
    let lastnumber= preferences[secondnumber] -1;
    if (lastnumber == secondnumber) continue;
    if ((lastnumber) ==i ){
      count ++;
    }
 }
  return count/3;


};
