const express = require('express');
const ExpressError = require('./expressError');
const {convertNumsArray, findMean, findMode, findMedian } = require('./helpers')

const app = express();


app.get('/mean', function(req,res,next){
    if(!req.query.nums){
        throw new ExpressError("Please pass a query key of nums with a comma-separated number list.", 400);
    }
    
    const stringNums = req.query.nums.split(',');
    const numsArr = convertNumsArray(stringNums);

    const result = {
        operation: "mean",
        result: findMean(numsArr)
    }

    return res.status(200).json(result);
})


app.get('/mode', function(req,res,next) {
    if(!req.query.nums){
        throw new ExpressError('Please pass a query key of nums with a comma-separated number list.', 400)
    };

    const stringNums = req.query.nums.split(",");
    const nums = convertNumsArray(stringNums);

    const result = {
        operation: "mode",
        result: findMode(nums)
    }

    return res.status(200).json(result);
})


app.get('/median', function(req,res,next){
    if(!req.query.nums){
        throw new ExpressError('Please pass a query key of nums with a comma-separated number list.', 400)
    };

    const stringNums = req.query.nums.split(",");
    const nums = convertNumsArray(stringNums);

    const result = {
        operation: 'median',
        result: findMedian(nums),
    }

    return res.status(200).json(result);
})


// error handler
app.use((req,res,next) => {
    const error = new ExpressError("Not found", 404);

    return next(error);
})


app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});


app.listen(3000, () => {
    console.log(`server started on port 3000`);
})