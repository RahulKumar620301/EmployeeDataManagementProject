const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')


const app = express()
const port = 3000

app.use(cors({origin: '*'}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public', express.static(path.join(__dirname, 'public')))


const empApi = require('./empApi')
app.use('/emp',empApi) //empApi is called by emp name

app.get('/', (req, res) => {
  res.send('welcome to my emp project.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})