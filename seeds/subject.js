
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { name: 'History' },
        { name: 'Government' },
        { name: 'Biology' },
        { name: 'English' },
        { name: 'Spanish' },
        { name: 'Geography' },
        { name: 'Philosophy' },
        { name: 'Physics' },
        { name: 'Math' },
        { name: 'Sociology' },
        { name: 'Psychology' },
        { name: 'Engineering' },
        { name: 'Politics' },
        { name: 'Music' },
        { name: 'Economics' },
        { name: 'Sociology' },
        { name: 'Psychology' },
        { name: 'Engineering' },
        { name: 'Politics' },
        { name: 'Music' },
        { name: 'Economics' },
      ]);
    });
};
