const { Router } = require('express')
const router = new Router()
const controller = require('../controllers/products')
const { update } = require('../../database')

const routeName = "/products"

// Lista todos os produtos
router.get(routeName, controller.getAll)

/// Lista um produto de acordo com seu ID
router.get(`${routeName}/:id`, controller.getById)

// Cria um produto
router.post(routeName, controller.create)

// Edita os dados de um produto
router.patch(`${routeName}/:id`, controller.update)

// Deleta um produto
router.delete(`${routeName}/:id`, controller.del)

module.exports = router