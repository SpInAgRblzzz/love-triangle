/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var triangleNumber = 0;
  if(preferences.length >= 3){
    for(var i = 0; i < preferences.length; i++){
      if(i === preferences[preferences[preferences[i] - 1] - 1] - 1 &&
        preferences[i] != preferences[preferences[i] - 1] && 
        preferences[i] !=  preferences[preferences[preferences[i] - 1] - 1] &&
        preferences[preferences[i] - 1] != preferences[preferences[preferences[i] - 1] - 1]){
        preferences[i] = 'checked';
        preferences[preferences[i] - 1] = 'checked';
        preferences[preferences[preferences[i] - 1] - 1] = 'checked';
        triangleNumber++
      }
    }
  }
  return triangleNumber
};
