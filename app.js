// require related modules used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// setting body-parser 擺放在所有路由之前
app.use(express.urlencoded({ extended: true}))

// localhost:3000 
app.get('/', (req, res) => {
  res.render('index')
})

// 以 POST 方法傳送的資料內容不會顯示在網址列上
app.post('/', (req, res) => {
  console.log('req.body', req.body)
  res.render('index')
})

app.listen(port, () => {
  console.log(`The Express server is running on https://localhost:${port}`)
})