
/* GET 'home' page */
module.exports.homelist = function(req, res,next){
  res.render('locations-list',
  { title: 'Loc8r - find a place to work with wifi',
    pageHeader:
    {
      title:'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations:[
      {
        name : 'Starcups',
        address : '125 High Street, Reading, RG6 1PS',
        rating : 3,
        facilities:['free wifi','White Coffee','Flavoured Coffee','Premium Continental Food'],
        distance: '1km'
      },
      {
        name : 'IITH Cafeteria',
        address : 'IITH Cafeteria, Ordnance Factory Estate, Yeddumailaram, Telangana 502205',
        rating : 5,
        facilities:['free wifi','Puffs','Coffee','Cold Drinks','pizza'],
        distance: '100m'
      },
      {
        name: 'Cafe Hero',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 4,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '200m'
      },
    ]
  });
};
/* GET 'Location info' page */
module.exports.locationInfo = function(req, res,next){
  res.render('location-info', { title: 'Location info' });
};
/* GET 'Add review' page */
module.exports.addReview = function(req, res){
  res.render('location-review-form', { title: 'Add review' });
};
