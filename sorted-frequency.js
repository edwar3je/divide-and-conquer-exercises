/* had to consult solution, but kept my functions below */

function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = findLast(arr, num);
    return lastIdx - firstIdx + 1;
  }
  
  function findFirst(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = Math.floor((low + high) / 2)
      if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
        return mid;
      } else if (num > arr[mid]) {
        return findFirst(arr, num, mid + 1, high)
      } else {
        return findFirst(arr, num, low, mid - 1)
      }
    }
    return -1
  }
  
  function findLast(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = Math.floor((low + high) / 2)
      if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
        return mid;
      } else if (num < arr[mid]) {
        return findLast(arr, num, low, mid - 1)
      } else {
        return findLast(arr, num, mid + 1, high)
      }
    }
    return -1
  }

/* These are my functions (not O(log n))*/

  function mySortedFrequency(arr, num) {
    if (num < arr[0] || num > arr[arr.length - 1]){
        return -1
    }
    let resp = myCalcFrequency(arr, num);
    return resp;
}

function myCalcFrequency(ar, nu){
    let leftI = 0;
    let rightI = ar.length - 1;
    while(ar[leftI] !== nu && ar[rightI] !== nu){
        if(ar[leftI] < nu){
            leftI += 1
        }
        if(ar[rightI] > nu){
            rightI -= 1 
        }
    }
    return ar.slice(leftI, rightI).length
}

module.exports = sortedFrequency