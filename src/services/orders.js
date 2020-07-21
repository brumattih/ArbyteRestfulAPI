const repository = require('../repositories/orders')
const productService = require('./products')
const Order = require('../models/Order')

const getAll = () => repository.getAll()

const getById = async (id) => {
    const order = await repository.getById(id)
    if (!order) {
        throw { status: 404, message: "Not found" }
    }
    return order
}

const create = async (data) => {
    const order = new Order({ ...data, id: undefined, created_at: undefined, updated_at: undefined })
    const product = await productService.getById(order.product_id)

    const value = order.quantity * product.price
    const id = await repository.create({ ...order, value: value.toFixed(2) })
    return repository.getById(id)
}




module.exports = {
    getAll,
    getById,
    create
}