exports.up = function(knex, Promise) {
  return knex.schema.createTable('badge', function (table) {
    table.increments();
    table.string('badges');
    table.integer('user_id')
      .references('user.id')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('badge');
};
