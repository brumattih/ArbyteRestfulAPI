const { Router } = require('express')
const router = new Router()
const controller = require('../controllers/orders')

const routeName = "/orders"

// Lista todos os pedidos
router.get(routeName, controller.getAll)

/// Lista um pedido de acordo com seu ID
router.get(`${routeName}/:id`, controller.getById)

// Cria um pedido
router.post(routeName, controller.create)

// Edita os dados de um pedido
router.patch(`${routeName}/:id`,controller.update)

// Deleta um pedido
router.delete(`${routeName}/:id`, (req, res) => { res.status(204).end() })

module.exports = router