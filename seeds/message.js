
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('myMessage').del()
    .then(() => {
      // Inserts seed entries
      return knex('myMessage').insert([
        { name: 'john h smith', email: 'john@gmail.com', message: 'supppp what up homie have you seen the new spiderman movie? that shit cray' },
      ]);
    });
};
