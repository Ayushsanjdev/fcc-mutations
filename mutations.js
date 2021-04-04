function mutation(arr) {
  let lowercaseFirst = arr[0].toLowerCase(); //making both the indexes of array in lowercase
  let lowercaseSecond = arr[1].toLowerCase();
  for(let i = 0; i < lowercaseSecond.length; i++) {
    //running loop to check if 1st index of array is same as the index of second by using less than zero. if found return false else it will be true; 
    if(lowercaseFirst.indexOf(lowercaseSecond[i]) < 0) {
      return false;
      }
    }
    return true;
}

console.log(mutation(["Mary", "Army"]));
