const {StatusCodes} = require("http-status-codes");

class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "ApiError";
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

class BadRequestError extends ApiError {
    constructor(message = 'Bad Request') {
        super(message, StatusCodes.BAD_REQUEST);
        this.name = "BadRequestError";
    }
}

class NotFoundError extends ApiError {
    constructor(message = 'Not Found') {
        super(message, StatusCodes.NOT_FOUND);
        this.name = "NotFoundError";
    }
}

class InternalServerError extends ApiError {
    constructor(message = 'Internal Server Error') {
        super(message, StatusCodes.INTERNAL_SERVER_ERROR);
        this.name = "InternalServerError";
    }
}

module.exports = {
    ApiError,
    BadRequestError,
    NotFoundError,
    InternalServerError,
}