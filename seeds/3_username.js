
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('username').del()
    .then(function () {
      // Inserts seed entries
      return knex('username').insert([
        { name: 'Jeff', email: 'Jeff@gmail.com', fiveDeckBadge: 2, perfectScore: 0, fiveFavorites: 3, userImage: 1 },
        { name: 'Jordan', email: 'Jordan@gmail.com', fiveDeckBadge: 5, perfectScore: 1, fiveFavorites: 5, userImage: 2 },
        { name: 'Brad', email: 'Brad@gmail.com', fiveDeckBadge: 8, perfectScore: 0, fiveFavorites: 2, userImage: 3 },
        { name: 'Sarah', email: 'Sarah@gmail.com', fiveDeckBadge: 3, perfectScore: 1, fiveFavorites: 8, userImage: 2 },
        { name: 'JoeBob', email: 'JoeBob@gmail.com', fiveDeckBadge: 1, perfectScore: 0, fiveFavorites: 1, userImage: 3 },
      ]);
    });
};
