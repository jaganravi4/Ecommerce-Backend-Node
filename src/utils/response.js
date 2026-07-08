const {StatusCodes} = require("http-status-codes");

const sendSuccess = (res, statusCode, data, event, resource, isAll = false) => {
    const target = isAll ? `all the ${resource}` : `the ${resource}`;

    return res.status(statusCode).json(
        {
            data: data,
            success: true,
            message: `Successfully ${event} ${target}`,
            error: {},
        }
    );
}

const sendError = (res, statusCode, error, event, resource, isAll = false) => {
    const target = isAll ? `all the ${resource}` : `the ${resource}`;

    return res.status(statusCode).json(
        {
            data: {},
            success: false,
            message: `Not able to ${event} ${target}`,
            error: error
        }
    );
}

const sendValidationError = (res, field, issue = 'is required') => {
    return res.status(StatusCodes.BAD_REQUEST).json(
        {
            data: {},
            success: false,
            message: `${field} ${issue}`,
            error: 'Validation Error',
        }
    )
}

module.exports = {
    sendSuccess,
    sendError,
    sendValidationError
}