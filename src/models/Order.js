const moment = require('moment')
const utcNow = moment().utc().format()

module.exports = function Order(data) {
    this.id = data.id
    this.product_id = data.product_id
    this.quantity = data.quantity
    this.value = data.value
    this.created_at = data.created_at || utcNow
    this.updated_at = data.updated_at || utcNow
}
