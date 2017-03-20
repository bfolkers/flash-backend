
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('badge').del()
    .then(function () {
      // Inserts seed entries
      return knex('badge').insert([
        { badge: 'pathTo5Badge' },
        { badge: 'pathToPerfectBadge' },
        { badge: 'pathToCreate5Badge' },
      ]);
    });
};
