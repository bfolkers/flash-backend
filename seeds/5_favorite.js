
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('favorite').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorite').insert([
        { username_email: 'Jordan@gmail.com', deck_id: 3 },
        { username_email: 'Jordan@gmail.com', deck_id: 4 },
        { username_email: 'Jordan@gmail.com', deck_id: 6 },
        { username_email: 'Jordan@gmail.com', deck_id: 5 },
        { username_email: 'Sarah@gmail.com', deck_id: 1 },
        { username_email: 'Sarah@gmail.com', deck_id: 2 },
        { username_email: 'Sarah@gmail.com', deck_id: 3 },
        { username_email: 'Sarah@gmail.com', deck_id: 4 },
        { username_email: 'Brad@gmail.com', deck_id: 1 },
        { username_email: 'Brad@gmail.com', deck_id: 2 },
        { username_email: 'Brad@gmail.com', deck_id: 6 },
        { username_email: 'Jeff@gmail.com', deck_id: 2 },
        { username_email: 'Jeff@gmail.com', deck_id: 3 },
        { username_email: 'Jeff@gmail.com', deck_id: 4 },
      ]);
    });
};
