
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        { name: 'Jeff', email: 'Jeff@gmail.com', fiveDeckBadge: 2, perfectScore: 0, fiveFavorites: 3 },
        { name: 'Jorden', email: 'Jorden@gmail.com', fiveDeckBadge: 5, perfectScore: 1, fiveFavorites: 5 },
        { name: 'Brad', email: 'Brad@gmail.com', fiveDeckBadge: 8, perfectScore: 0, fiveFavorites: 2 },
        { name: 'Sarah', email: 'Sarah@gmail.com', fiveDeckBadge: 3, perfectScore: 1, fiveFavorites: 8 },
        { name: 'JoeBob', email: 'JoeBob@gmail.com', fiveDeckBadge: 1, perfectScore: 0, fiveFavorites: 1 },
      ]);
    });
};
