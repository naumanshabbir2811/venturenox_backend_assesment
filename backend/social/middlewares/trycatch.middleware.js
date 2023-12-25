// tryCatchMiddleware.js

const tryCatchMiddleware = (handler) => async (req, res, next) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = tryCatchMiddleware;
  