
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('deck').del()
    .then(function () {
      // Inserts seed entries
      return knex('deck').insert([
        { name: 'history101' },
        { name: 'english205' },
        { name: 'math405' },
      ]);
    });
};
