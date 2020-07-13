const { Router } = require('express')
const router = new Router()
const knex = require('../database')
const { update } = require('../database')

const routeName = "/products"
const tableName = 'products'

// Lista todos os produtos
router.get(routeName, (req, res) => {
    console.log('Caiu na rota')
    knex(tableName)
        .then(result => {
            res.json(result)
        }).catch((err) => { console.log('err: ', err) })
})

/// Lista um produto de acordo com seu ID
router.get(`${routeName}/:id`, (req, res) => {
    knex(tableName)
        .where({ id: req.params.id })
        .then(([found]) => res.json(found))
})

// Cria um produto
router.post(routeName, (req, res) => {
    knex(tableName)
        .insert(req.body)
        .returning('*')
        .then((inserted => {
            res.status(201).json(inserted)
        }))
})

// Edita os dados de um produto
router.patch(`${routeName}/:id`, async (req, res) => {
    try {
        const [found] = await knex(tableName).where({ id: req.params.id })
        if (!found) {
            const err = Error("Not Found")
            err.status = 404
            throw err
        }
        const updated = await knex(tableName)
            .where({ id: req.params.id })
            .update(req.body)
        res.json(updated)
    } catch (err) {
        res.status(err.status || 500).json({ message: err.message })
    }
})

// Deleta um produto
router.delete(`${routeName}/:id`, (req, res) => {
    knex(tableName)
        .where({ id: req.params.id })
        .del()
        .then(() => res.status(204).end())
})

module.exports = router