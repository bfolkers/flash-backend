exports.up = function(knex, Promise) {
  return knex.schema.createTable('deck_subject', function (table) {
    table.integer('deck_id')
      .references('deck.id')
      .onDelete('CASCADE');
    table.integer('subject_id')
      .references('subject.id')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('deck_subject');
};
