
exports.up = function(knex, Promise) {
    return knex.schema.createTable('stores', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('description', 144)
        table.string('imageUrl')
    })
};

exports.down = function(knex, Promise) {
    return knex.schemas.dropTable('stores')
};
