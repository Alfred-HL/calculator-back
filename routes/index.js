const express = require('express')
const router = express.Router()

const routeCalculator = require('./calculator')

//設定路由
router.use(routeCalculator)

module.exports = router
