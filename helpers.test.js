const { findMean, findMedian, findMode } = require("./helpers");

describe("findMedian helper tests:", () => {
    // expect(findMedian([1,-1,4,2])).toEqual(1.5);
    expect(findMedian([5,9,20])).toEqual(9);
})

describe("findMode helper tests:", () => {
    // expect(findMode([1,1,4,2,1])).toEqual(1);
})

describe("findMean helper tests:", () => {
    // expect(findMedian([1,-1,4,2])).toEqual(1.5);
    // expect(findMedian([5,9,20])).toEqual(9);
})