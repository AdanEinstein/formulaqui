/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('formulas', table => {
        table.increments('id').primary();
        table.string('nome').notNull();
        table.string('autor').notNull();
        table.integer('categoriaId').references('id').inTable('categorias')
        table.string('descricao').notNull();
        table.boolean('formula').notNull();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('formulas');
};
