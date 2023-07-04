//Error middleware for 404s
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  // set error status to 404
  res.status(404);
  // pass error to next middleware
  next(error);
};

//Error middleware for 500s
const errorHandler = (err, req, res, next) => {
  // set error status to 500 if status code is 200
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  // set error message
  res.status(statusCode);
  // send error message
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
