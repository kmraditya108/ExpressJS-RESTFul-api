class ApiError extends Error{
    constructor(status, message){
        super(message);
        // this.status = status;
    }
}

class NotFoundError extends ApiError{
    constructor(msg="Resource not found"){
        super(404, msg);
    }
}

class BadRequestError extends ApiError{
    constructor(msg='Bad Request'){
        super(404, msg);
    }
}

module.exports = {
    BadRequestError,
    NotFoundError,
    ApiError
}