
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('deck').del()
    .then(function () {
      // Inserts seed entries
      return knex('deck').insert([
        { name: 'history101', username_email: 'Jeff@gmail.com', subject_id: 1 },
        { name: 'english205', username_email: 'Jordan@gmail.com', subject_id: 4 },
        { name: 'math405', username_email: 'Brad@gmail.com', subject_id: 9 },
        { name: 'biology101', username_email: 'Brad@gmail.com', subject_id: 3 },
        { name: 'sociology304', username_email: 'Brad@gmail.com', subject_id: 10 },
        { name: 'psychology201', username_email: 'Jeff@gmail.com', subject_id: 11 },
        { name: 'english403', username_email: 'Jordan@gmail.com', subject_id: 4 },
      ]);
    });
};
