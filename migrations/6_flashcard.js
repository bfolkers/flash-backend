exports.up = function(knex, Promise) {
  return knex.schema.createTable('flashcard', function (table) {
    table.string('front');
    table.string('back');
    table.integer('deck_id')
      .references('deck.id')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('flashcard');
};
