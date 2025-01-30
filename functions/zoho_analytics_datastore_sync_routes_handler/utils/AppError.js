class AppError extends Error {
  statusCode = 500;

  constructor(statusCode, message) {
    super();

    // Check if statusCode is null or undefined
    if (statusCode == null) { // This checks for both null and undefined
      throw new Error('statusCode cannot be null or undefined');
    }

    this.statusCode = statusCode;
    this.message = message;
  }
}

module.exports = AppError;
