const moment = require('moment')
const utcNow = moment().utc().format()

// module.exports = function User(data = {}) {
//     this.id = data.id
//     this.name = data.name
//     this.email = data.email
//     this.created_at = data.created_at || utcNow
//     this.updated_at = data.updated_at || utcNow
// }

module.exports = function User({
    id,
    name, email,
    created_at = utcNow,
    updated_at = utcNow,
} = {}) {
    this.id = id
    this.name = name
    this.email = email
    this.created_at = created_at
    this.updated_at = updated_at
}



