exports.up = function(knex, Promise) {
  return knex.schema.createTable('badge', function (table) {
    table.string('pathTo5Badge');
    table.string('pathToPerfectBadge');
    table.string('pathToCreate5Badge');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('badge');
};
