exports.up = function (knex, Promise) {
  return knex.schema.createTable('myMessage', (table) => {
    table.string('name');
    table.string('email');
    table.string('phone');
    table.string('message');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('myMessage');
};
