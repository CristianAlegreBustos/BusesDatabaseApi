export const serverErrorHandler = (err, req, res, next) => {
    if (err.extensions && err.extensions.code === "VALIDATION_FAILED") {
        return res.status(400).send(err.message);
    }
    return next(err);
};
