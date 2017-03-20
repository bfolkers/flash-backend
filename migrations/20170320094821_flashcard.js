exports.up = function(knex, Promise) {
  return knex.schema.createTable('flashcard', function (table) {
    table.increments();
    table.string('flashcard')
    table.integer('deck_id')
      .references('deck.id')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('flashcard');
};
