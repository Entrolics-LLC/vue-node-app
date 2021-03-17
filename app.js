const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 4001

app.set('views', path.join(__dirname, '/dist'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use('/', express.static(__dirname + '/dist'))


//set a static folder
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server up and running on ${PORT}`)
})