const { Router } = require('express')
const router = new Router()

const products = require('./products')
const orders = require('./orders')
const users = require('./users')

router.use(products)
router.use(orders)
router.use(users)

router.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

module.exports = router