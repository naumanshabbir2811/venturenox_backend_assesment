const { RESPONSE_CONSTANTS } = require("../utilities/constants");

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    // Handle different types of errors and send appropriate responses
    if (err instanceof MyCustomError) {
      res.status(RESPONSE_CONSTANTS.BAD_REQUEST).json({ error: err.message });
    } else {
      res.status(RESPONSE_CONSTANTS.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
  
    // Ensure to call next with the error parameter
    next(err);
  };
  
  module.exports=errorHandler