const { STATUS_CODES } = require("http");

function handleError(error, req, res, next) {
    console.error(error);
    const status = error.status || 500; //internal server error
    res.status(status);
    const message = STATUS_CODES[status];
    if (process.env.NODE_ENV === "production") {
        res.send({ error: message });
    } else {
        const stackArray = error.stack.split("\n").map((line) => line.trim());
        res.send({
            error: message,
            stack: stackArray,
        });
    }
    };

    module.exports = handleError;