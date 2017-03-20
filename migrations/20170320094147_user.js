exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function (table) {
    table.string('name');
    table.string('email').primary();
    table.integer('fiveDeckBadge');
    table.integer('perfectScore');
    table.integer('fiveFavorites');
    table.integer('badge_id')
      .references('badge.id')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
