'use strict'

export default (event, context, callback) => {
  console.log('Second function event=', event)
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello from the second function`,
    }),
  };

  callback(null, response);
}
