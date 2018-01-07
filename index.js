const express = require('express');
const app = module.exports = express();

app.use((req, res, next) => {
	console.log(`[${req.method}] - ${req.originalUrl}`);
	next();
});


// Load controllers
require('./controllers');


app.listen(3000, () => {
	console.log('Server running on http://localhost:3000');
});
