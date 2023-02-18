const binarySearch = (arr, target) => {
    // pick the middle index.
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
        if(target > middleVal){
            leftIdx = middleIdx + 1;
        } else if (target < middleVal) {
            rightIdx = middleIdx  - 1;
        } else {
            return middleIdx;
        }
    }

    return -1;
} 

console.log(binarySearch([0,1,2,3,4,5], 7));