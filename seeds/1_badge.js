
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('badge').del()
    .then(function () {
      // Inserts seed entries
      return knex('badge').insert([
        { pathTo5Badge: 'http://3.bp.blogspot.com/-HQVbDXm11hM/TyqCNxkoFEI/AAAAAAAAAWM/3F1s9sblyGQ/s1600/groundhog12.png' },
        { pathToPerfectBadge: 'http://www.adweek.com/core/wp-content/uploads/sites/2/2011/06/foursquareMoneyBadge.jpg' },
        { pathToCreate5Badge: 'http://farm5.static.flickr.com/4072/4443271142_f226f2bf08_o.jpg' },
      ]);
    });
};