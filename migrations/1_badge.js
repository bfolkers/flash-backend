exports.up = function(knex, Promise) {
  return knex.schema.createTable('badge', function (table) {
    table.string('fiveDeckBadge');
    table.string('perfectScore');
    table.string('fiveFavorites');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('badge');
};
