/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("formulas", (table) => {
        table.increments("id").primary();
        table.string("nome").notNull();
        table.string("autor").notNull();
        table.string("categoria").notNull();
        table.string("descricao").notNull();
        table.string("formula").notNull();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("formulas");
};
