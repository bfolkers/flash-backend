
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('myMessage').del()
    .then(() =>
      // Inserts seed entries
       knex('myMessage').insert([
        { name: 'john h smith', email: 'john@gmail.com', phone: '2014035940', message: 'test' },
       ]));
};
