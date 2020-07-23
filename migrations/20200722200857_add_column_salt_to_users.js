const tableName = 'users'

exports.up = function (knex) {
    return knex.schema.table(tableName, table => {
        table.string('salt')
    })

};

exports.down = function (knex) {
    return knex.schema.table(tableName, table => {
        table.dropColumn('salt')
    })
};
