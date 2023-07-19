/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'super_team_picker',
      userName: "hooman",
      password: '137278'
    },
    migrations: {
      tableName: 'super_team_picker',
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
};
