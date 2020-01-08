const express = require('express')
const app = express()
const path = require('path');

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static(path.resolve(__dirname, 'tbb.tar')))

app.listen(3000, () => console.log('Example app listening on port 3000!'))