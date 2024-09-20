const express = require('express');
const app = express();

// your code goes here

require('dotenv').config();

app.get('/', (req, res) => {
    res.send(process.env.SECRET_MESSAGE);
});

// FOR BONUS -- RUN THIS IN SERVER FOLDER \/
// SECRET_MESSAGE="Hello from command-line" PORT=5000 node app.js

const port = process.env.PORT;
app.listen(port, () => console.log('Server is listening on port', port));
