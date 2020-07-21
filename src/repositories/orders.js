const knex = require('../../database')
const Order = require('../models/Order')
const tableName = 'orders'

// SELECT * FROM orders
const getAll = async () => {
    const orders = await knex(tableName)
    return orders.map((order) => new Order(order))
}

// SELECT * FROM order WHERE id=?
const getById = async id => {
    const [order] = await knex(tableName).where({ id: id })
    return new Order(order)
}

// INSERT INTO orders (product_id, quantity, value) VALUES (?, ?, ?)
const create = async order => {
    const [id] = await knex(tableName).insert(order)
    return id
}

// const create = (order) => {
//     return knex(tableName)
//         .insert(order)
//         .then(([inserted]) => inserted)
// }


// UPDATE orders SET product_id=?, value=? WHERE id=?
const update = (id, order) => knex(tableName).where({ id: id }).update(order)

module.exports = {
    getAll,
    getById,
    create,
    update,
}

