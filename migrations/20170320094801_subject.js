exports.up = function(knex, Promise) {
  return knex.schema.createTable('subject', function (table) {
    table.increments();
    table.string('name');
    table.integer('deck_subject_id')
      .references('deck_subject.id')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('subject');
};
