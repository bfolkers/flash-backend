
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('subject').del()
    .then(function () {
      // Inserts seed entries
      return knex('subject').insert([
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
