
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorite').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorite').insert([
        { current: 'favorite' }
      ]);
    });
};
