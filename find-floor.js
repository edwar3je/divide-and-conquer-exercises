// This is the correct function according to the solution

function findFloor(arr, num, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    if (num >= arr[high]) return arr[high];
  
    let mid = Math.floor((low + high) / 2)
  
    if (arr[mid] === num) return arr[mid];
  
    if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
      return arr[mid - 1];
    }
  
    if (num < arr[mid]) {
      return findFloor(arr, num, low, mid - 1);
    }
  
    return findFloor(arr, num, mid + 1, high)
  }

// This is my version of the function. It works for all cases except when a user enters a number that is greater
// than the last number in the array (it appears to cause an infinite loop).

function myFindFloor(arr, num) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while(leftIdx <= rightIdx){
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (middleIdx === 0 && arr[middleIdx] <= num){
        return arr[middleIdx]
    }
    else if (arr[middleIdx] === num){
        return arr[middleIdx]
    }
    else if (arr[middleIdx] < num && arr[middleIdx + 1] > num){
        return arr[middleIdx]
    }
    else if (arr[middleIdx] < num && arr[middleIdx + 1] < num){
        leftIdx = middleIdx + 1
    }
    else if (arr[middleIdx] > num){
        rightIdx = middleIdx - 1
    }
  }
  return -1
}

module.exports = findFloor