// ExpressError class extends normal JS error to allow us to easuly add status codes when instantiating an error instance

class ExpressError extends Error{
    constructor(message, status){
        super();
        this.message = message;
        this.status = status;
        console.error(this.stack);
    }
}

module.exports = ExpressError;