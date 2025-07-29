const serverless = require('serverless-http');
const app = require('../app'); // import the Express app

module.exports = serverless(app); // export for Vercel
