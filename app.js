// require related modules used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(express.urlencoded({ extended: true}))

// localhost:3000 
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log('req.body', req.body)
  res.render('index')
})

app.listen(port, () => {
  console.log(`The Express server is running on https://localhost:${port}`)
})