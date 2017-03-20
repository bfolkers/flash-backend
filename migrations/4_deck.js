exports.up = function(knex, Promise) {
  return knex.schema.createTable('deck', function (table) {
    table.increments();
    table.string('name');
    table.string('username_email')
      .references('username.email')
      .onDelete('CASCADE');
    table.integer('subject_id')
      .references('subject.id')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('deck');
};
