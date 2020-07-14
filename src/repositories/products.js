const knexfile = require("../../knexfile");
const knex = require('../../database')

const tableName = 'products'

// SELECT * FROM products
const getAll = () => knex(tableName)


// SELECT * FROM products WHERE id=?
const getById = (id) => knex(tableName)
    .where({ id: id })
    .then(([product]) => product)

// INSERT INTO products (name, price) VALUES (?, ?)
const create = (product) => {
    return knex(tableName)
        .insert(product)
        .then(([inserted]) => inserted)
}

const del = (id) => {
    return knex(tableName)
        .where({ id: id })
        .del()
}


module.exports = {
    getAll,
    getById,
    create,
    del,
}