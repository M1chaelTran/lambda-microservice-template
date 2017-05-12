'use strict'

export default (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello from first function. The current time is ${new Date().toTimeString()}.`,
    }),
  };

  callback(null, response);
}
