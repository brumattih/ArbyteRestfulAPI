const service = require('../services/users')
const handleError = require('./handleError')

const create = async (req, res) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.password) {
            throw { status: 404, message: "Invalid data" }
        }
        const created = await service.create(req.body)
        res.status(201).json(created)
    } catch (error) {
        handleError(res, error)
    }
}

const login = (req, res) => { }

module.exports = {
    create,
    login
}