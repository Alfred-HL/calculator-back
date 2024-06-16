const express = require('express')
const router = express.Router()
const { plus, minus, multiply, divide } = require('../services/calculator')
const { history } = require('../services/calculator')
const app = express()
const ROUND = 5


router.get('/', (req, res) => {
  res.status(200).send('This is backend of Calculator.')
  
})


//加法路由
router.get('/plus', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  const answer = plus(v1, v2)
  res.json({
    answer,
  })
})

//減法路由
router.get('/minus', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  const answer = minus(v1, v2)
  res.json({
    answer,
  })
})

//乘法路由
router.get('/multiply', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  const answer = multiply(v1, v2)
  res.json({
    answer,
  })
})

//除法路由
router.get('/divide', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  const answer = divide(v1, v2)
  res.json({
    answer,
  })
})

//讀取歷史輸入
router.get('/history', (req, res) => {
  const dataHistory = history()
  res.json({
    dataHistory,
  })

})



module.exports = router