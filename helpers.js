/**
 * Create an objcet with frequencies for items in an array
 * @param {Array} arr 
 * @returns {Object} frequencies object
 */
const generateFrequencyObject = (arr) => {
    return arr.reduce((acc,curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
}


/**
 * Converts array of strings to array of numbers
 * @param {Array} numsArrAsStrings array with stings
 * @returns {Array} array
 */
const convertNumsArray = (numsArrAsStrings) => {
    const result = [];

    for (const num of numsArrAsStrings){
        const numVal = Number(num);

        if(Number.isNaN(numVal)){
            throw new Error(`The value ${num} is not a valid number.`);
        }

        result.push(numVal);
    }

    return result;
}

/**
 * Find the mean of the elements in the array
 * @param {Array} numsArr array
 * @returns {Number} mean 
 */
const findMean = (numsArr) => {
    if(numsArr.length === 0) return 0;
    return numsArr.reduce((acc,curr)=>{
        return acc + curr;
    },0) / numsArr.length;
}


/**
 * Find the mode of the elements in the array
 * @param {Array} numsArr array
 * @returns {Number} mode
 */
const findMode = (numsArr) => {
    const frequencies = generateFrequencyObject(numsArr);

    let count = 0;
    let mostFrequent;

    for (const key in frequencies){
        if(frequencies[key] > count){
            mostFrequent = key;
            count = frequencies[key];
        }
    }

    return +mostFrequent;
}

/**
 * Find the mode of the elements in the array
 * @param {Array} numsArr array
 * @returns {Number} median
 */
const findMedian = (numsArr) => {
    numsArr.sort((a,b) => a - b);

    const middleIdx = Math.floor(numsArr.length / 2);
    let median;

    if (numsArr.length % 2 === 0){
        median = (numsArr[middleIdx] + numsArr[middleIdx-1] / 2);
    } else {
        median = numsArr[middleIdx];
    }

    return median;
}


module.exports = {
    convertNumsArray,
    findMean,
    findMode,
    findMedian,
    generateFrequencyObject
}