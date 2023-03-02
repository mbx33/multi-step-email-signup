const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.get('/api/hello', (req, res) => {
	res.send('Hello World! This is it');
});

app.listen(PORT, () => {
	console.log('Server started on port ' + PORT);
});
