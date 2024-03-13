const express = require('express')
const app = express()
const router = express.Router()
const url = require('url')
const db = require('./db.js')
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/index_getdata', (req, res) => {
  var name = url.parse(req.url, true).query

  console.log(name)
})
app.post('/add', (req, res, next) => {
  let body = req.body

  console.log('dbAdd', req.body)

  let sqlParam = {
    id: body.uuid,

    name: body.name,
  }

  console.log('dbAdd', sqlParam)

  db.dbAdd('teacher', sqlParam, res, next)
})

app.post('/delete_data', (req, res, next) => {
  let body = req.body

  console.log('delet', req.body)

  let sqlParam = {
    id: body.uuid,
  }

  console.log('delet', sqlParam)

  db.dbDelete('teacher', sqlParam, res, next)
})

app.post('/update_data', (req, res, next) => {
  let body = req.body

  console.log('update', req.body)

  let sqlParam = {
    name: body.name,

    id: body.uuid,
  }

  console.log('update', sqlParam)

  db.dbUpdate('teacher', sqlParam, res, next)
})

app.post('/queryById_data', (req, res, next) => {
  let body = req.body

  console.log('queryById_data', req.body)

  let sqlParam = {
    id: body.uuid,
  }

  console.log('queryById_data', sqlParam)

  db.dbQueryById('teacher', sqlParam, res, next)
})

app.get('/queryAll_data', (req, res, next) => {
  db.dbQueryAll('teacher', '', res, next)
})

router.get('/', (req, res, next) => {})

module.exports = router
