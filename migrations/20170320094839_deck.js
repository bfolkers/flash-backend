exports.up = function(knex, Promise) {
  return knex.schema.createTable('deck', function (table) {
    table.increments();
    table.string('name');
    table.integer('user_id')
      .references('user.id')
      .onDelete('CASCADE');
    table.integer('deck_subject_id')
      .references('deck_subject.id')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('deck');
};
