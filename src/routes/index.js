const { Router } = require('express')
const router = new Router()

const products = require('./products')
const orders = require('./orders')

router.use(products)
router.use(orders)

module.exports = router