const express = require('express')
const routes = require('./routes.js')
const app = express()

app.use('/', routes)

app.listen(8080, () => console.log('App running : http://localhost:8080'))
