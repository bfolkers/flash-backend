exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorite', function (table) {
    table.increments();
    table.string('current');
    table.integer('user_id')
      .references('user.id')
      .onDelete('CASCADE');
    table.integer('deck_id')
      .references('deck.id')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favorite');
};
