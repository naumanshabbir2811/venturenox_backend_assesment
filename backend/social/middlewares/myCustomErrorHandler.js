class MyCustomError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
      this.status = 400; // Set the appropriate HTTP status code
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = MyCustomError;
  