exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorite', function (table) {
    table.string('username_email')
      .references('username.email')
      .onDelete('CASCADE');
    table.integer('deck_id')
      .references('deck.id')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favorite');
};
