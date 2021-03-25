const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 4001
const REGION = process.env.REGION || 'unknown'

app.set('views', path.join(__dirname, '/dist'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/', (req, res) => {
  console.log('req.headers', req.headers)
  return res.send({ env: process.env, requestData: req.headers })
})

app.use('/', express.static(__dirname + '/dist'))


//set a static folder
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server up and running on ${PORT}`)
})