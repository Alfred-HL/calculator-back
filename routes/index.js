const express = require('express')
const router = express.Router()

const routeCalculator = require('./calculator')

//設定路由
router.use('/calculator', routeCalculator)

//設定記錄路由
// router.use('/history', routeCalculator)

module.exports = router
