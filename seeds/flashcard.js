
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flashcard').del()
    .then(function () {
      // Inserts seed entries
      return knex('flashcard').insert([
        { current: 'test' }
      ]);
    });
};
