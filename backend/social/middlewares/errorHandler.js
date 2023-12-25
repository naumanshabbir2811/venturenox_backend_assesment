const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    // Handle different types of errors and send appropriate responses
    if (err instanceof MyCustomError) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  
    // Ensure to call next with the error parameter
    next(err);
  };
  
  module.exports=errorHandler