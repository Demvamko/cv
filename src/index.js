const express = require('express');
const http = require('http');
const path = require('path');

const PORT = process.env.PORT || 5000;

let app = express();
let server = http.createServer(app);

app.use(express.json())

app
    .use(express.static(path.join(__dirname, '../res')))
    .get('/', (req, res) => res.sendFile(path.join(__dirname, '../res/html/index.html')))
    .get('/daily', (req, res) => res.sendFile(path.join(__dirname, '../res/html/daily.html')));

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
