const express = require('express')
const router = express.Router()

const routeCalculator = require('./calculator')

//設定路由
router.use('/calculate', routeCalculator)

module.exports = router
