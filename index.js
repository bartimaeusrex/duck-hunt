const express = require('express')
const scores = require('./scores')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.render('index', { scores })
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(8080, () => {
  console.log('Listening on port 8080...')
})


