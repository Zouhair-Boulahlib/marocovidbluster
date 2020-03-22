const express = require('express')
const covid = require('./index').getCovidData;
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    covid().then(data => res.json(data));
})

app.listen(port, () => console.log(`marocovidbluster listening on port ${port}! in local = http://localhost:${port}`))
