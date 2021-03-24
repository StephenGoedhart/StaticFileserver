const express = require('express')
const cors = require('cors');
const app = express()

const port = 3000

const directory = '/public';

app.use(cors());
app.use(express.static(__dirname + directory))

app.get(`${directory}/example.json`, (req, res) => {
    res.sendFile(`${directory}/example.json`, { root: __dirname });
});

app.listen(port, () => {
  console.log(`File available on http://localhost:${port}/public/example.json`)
})