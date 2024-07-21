const express = require('express')
const router = express.Router()
const { Calculator, history } = require('../services/calculator');
const { calculate, calcHistory } = require('../services/formulaCalculate')
const app = express()
const ROUND = 5


router.get('/', (req, res) => {
  res.status(200).send('This is backend of Calculator.')
  
})

const calc = new Calculator();

//求解算式路由(+: %2B)
router.get('/calculate', (req, res) => {
  const QUERY = req.query
  const answer = calculate(QUERY.formula)
  res.json({
    answer,
  })
})

//求且算式歷史紀錄
router.get('/calculate/history', (req, res) => {
  const dataHistory = calcHistory()
  res.json({
    dataHistory,
  })
})


//加法路由
router.get('/plus', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  const answer = calc.plus(v1, v2)
  res.json({
    answer,
  })
})

//減法路由
router.get('/minus', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  const answer = calc.minus(v1, v2)
  res.json({
    answer,
  })
})

//乘法路由
router.get('/multiply', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  const answer = calc.multiply(v1, v2)
  res.json({
    answer,
  })
})

//除法路由
router.get('/divide', (req, res) => {
  const QUERY = req.query
  const v1 = Number(QUERY.v1)
  const v2 = Number(QUERY.v2)
  const answer = calc.divide(v1, v2)
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