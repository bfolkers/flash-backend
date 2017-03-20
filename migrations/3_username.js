exports.up = function(knex, Promise) {
  return knex.schema.createTable('username', function (table) {
    table.string('name');
    table.string('email').primary();
    table.integer('fiveDeckBadge');
    table.integer('perfectScore');
    table.integer('fiveFavorites');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('username');
};
