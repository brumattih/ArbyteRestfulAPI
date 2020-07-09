const { Router } = require('express')
const router = new Router()

const products = require('./products')
const orders = require('./orders')

router.use(products)
router.use(orders)

router.use((req, res, next) => {
    const erro = new Error('Não encontrado')
    erro.status = 404
    next(erro)
})

module.exports = router