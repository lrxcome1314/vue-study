const express = require('express')
const bodyParser = require('body-parser')
//导入数据库配置
const $dbConfig = require('./dbconfig')

const app = express()
// 引入cors模块
var cors = require('cors')
const mysql = require('mysql')

//使用body-parser中间件
app.use(bodyParser.json())

//
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') //允许的header类型

  res.header('Access-Control-Allow-Headers', 'Content-type') //跨域允许的请求方式

  res.header(
    'Access-Control-Allow-Methods',

    'PUT,POST,GET,DELETE,OPTIONS,PATCH',
  ) //可选，用来指定本次预检请求的有效期，单位为秒。在此期间，不用发出另一条预检请求。
  res.header('Access-Control-Max-Age', '1728000') //预请求缓存20天

  next()
})
// 配置跨域
app.use(
  cors({
    // 允许跨域的服务器地址,可以写多个
    origin: [
      'http://localhost:8081',
      'http://localhost:8808',
      'http://127.0.0.1:8081',
      'http://127.0.0.1:8808',
    ],
    // 使用cookie时需要设置为true
    //credentials: true,
  }),
)
app.use(
 express.urlencoded({
   extended: true,
}),
)
// 连接MySQL数据库
const connection = mysql.createConnection({
  port: '3306',
  host: 'localhost', // 主机名
  user: 'root', // 用户名
  password: 'root', // 密码（若有）
  database: 'demo', // 要连接的数据库名称
})
connection.connect((err) => {
  if (err) throw err
  console.log('Connected to the MySQL server!')
})

//获取用户信息
app.get('/api/data', (req, res) => {
  const sql = 'SELECT * FROM userinfo' // 修改为自己的表格名称或者其他查询语句
  connection.query(sql, (error, results) => {
    if (error) throw error
    //connection.log(results)
    console.log(results)

    res.json(results)
  })
})

//获取商品信息
app.get('/api/GetGooddata', (req, res) => {
  const sql = 'SELECT * FROM Goods' // 修改为自己的表格名称或者其他查询语句
  connection.query(sql, (error, results) => {
    if (error) throw error
    //connection.log(results)
    //console.log(results)
    res.json(results)
  })
})
app.get('/api/GetById', (req, res) => {
  //const queryString = 'SELECT * FROM Goods' // 修改为自己的表格名称或者其他查询语句
  //const data = Object.values(req.query).join("','")
  //const datastring = Object.values(req.query)
  const data = req.query
  const sql = 'select * from Goods where Id=' + data.Id
  console.log(data)
  console.log(sql)
  /*  connection.query(queryString,(error, results) => {
  if (error) throw error
  //connection.log(results)
  console.log(results)
  console.log(req.query)
  //console.log(req.body)
   
  //res.json(results)
  }) */
  //connection.query(sql, (error, results) => {
  //if (error) throw error
  //console.log(results)
  //})
  res.send()
})
//添加商品
app.get('/api/AddGooddata', (req, res) => {
  //const queryString = 'SELECT * FROM Goods' // 修改为自己的表格名称或者其他查询语句
  //const data = Object.values(req.query).join("','")
  const datastring = Object.values(req.query)
  const data = req.query
  const sqlstr =
    'insert into Goods(GoodsTypeId,GoodsName,GoodsDetail,GoodsNum,GoodsPrice) values(' +
    data.GoodsTypeId +
    ",'" +
    data.GoodsName +
    "','" +
    data.GoodsDetail +
    "'," +
    data.GoodsNum +
    ',' +
    data.GoodsPrice +
    ')'
  const sql =
    'insert into Goods(GoodsTypeId,GoodsName,GoodsDetail,GoodsNum,GoodsPrice) values(?,?,?,?,?)'
  console.log(sqlstr)
  /*  connection.query(queryString,(error, results) => {
  if (error) throw error
  //connection.log(results)   
  //res.json(results)
  }) */
  connection.query(sql, [...datastring], (error, results) => {
    if (error) throw error
    console.log(results)
  })
  res.send()
})
//添加商品(post)
app.post('/api/AddGooddata', (req, res) => {
  //const queryString = 'SELECT * FROM Goods' // 修改为自己的表格名称或者其他查询语句
  //connection.query(queryString, (error, results) => {
  //if (error) throw error
  //connection.log(results)
  //console.log(results)
  //console.log(1111)
  //console.log(req)
  console.log(req.params)
  console.log(req.body)

  //res.json(results)
  //})
})

//修改商品
app.get('/api/updateGooddata', (req, res) => {
  //const queryString = 'SELECT * FROM Goods' // 修改为自己的表格名称或者其他查询语句
  //const data = Object.values(req.query).join("','")
  const { Id, GoodsTypeId, GoodsName, GoodsDetail, GoodsNum, GoodsPrice } =
    req.query
  const datastring = Object.values(req.query)
  const sql =
    'update Goods set GoodsTypeId=?,GoodsName=?,GoodsDetail=?,GoodsNum=?,GoodsPrice=? where Id=?'
  connection.query(
    sql,
    [GoodsTypeId, GoodsName, GoodsDetail, GoodsNum, GoodsPrice, Id],
    (error, results) => {
      if (error) throw error
    },
  )
  res.send('数据修改成功')
})

//获取订单信息
app.get('/api/GetOrderdata', (req, res) => {
  const queryString = 'SELECT * FROM Order' // 修改为自己的表格名称或者其他查询语句
  connection.query(queryString, (error, results) => {
    if (error) throw error
    //connection.log(results)
    console.log(results)

    res.json(results)
  })
})
//获取订单详情信息
app.get('/api/GetOrderDetaildata', (req, res) => {
  const queryString = 'SELECT * FROM OrderDetail' // 修改为自己的表格名称或者其他查询语句
  connection.query(queryString, (error, results) => {
    if (error) throw error
    //connection.log(results)
    console.log(results)

    res.json(results)
  })
})

app.listen(3001, () => {
  console.log(`Server is running on port `)
})
