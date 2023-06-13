// These are the correct functions using O(log n) according to the solution

function findRotationCount(arr, low = 0, high = arr.length - 1) {
    if (high < low) return 0;
    if (high === low) return low;
    let mid = Math.floor((low + high) / 2)
  
    if (mid < high && arr[mid + 1] < arr[mid])
      return mid + 1;
  
    if (mid > low && arr[mid] < arr[mid - 1]) {
      return mid;
    }
  
    if (arr[high] > arr[mid]) {
      return findRotationCount(arr, low, mid - 1);
    }
  
    return findRotationCount(arr, mid + 1, high);
  }


// These are my version of the functions (not fully functional)

function myFindRotationCount(arr) {
  if(arr[0] < arr[(arr.length) - 1]){
    return 0
  }
  let resp = myFindLow(arr);
  return resp
}

function myFindLow(ar, bot=0, top=(ar.length - 1)) {
    if (top >= bot){
        let mid = Math.floor((bot + top) / 2);
        if(ar[mid] > ar[mid - 1] && ar[mid] > ar[mid + 1]){
            return mid + 1
        }
        else if(ar[mid] > ar[mid - 1] && ar[mid] < ar[mid + 1]){
            return myFindLow(ar, bot, mid - 1)
        }
        else if (mid === 0){
            return mid
        }
    }
}

module.exports = findRotationCount