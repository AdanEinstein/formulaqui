// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	client: "mysql",
	connection: {
		host: process.env.HOST_DATABASE,
    port : 3306,
		user: process.env.USER_DATABASE,
		password: process.env.PASSWORD_DATABASE,
		database: "formulaqui",
	},
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		tableName: "knex_migrations",
	},
};
