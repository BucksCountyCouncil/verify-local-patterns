var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// make radio-group button routes work

router.get('*/example-service/*', function (req, res) {

  var radioGroup = req.query['radio-group'];

  if (radioGroup) {

    res.redirect(radioGroup);

  } else {

    // if radio-group is any other value (or is missing) render the page requested

    var str = req.path;
    res.render( str.substring(1) );

  }
});

// add your routes here

router.get('/service-patterns/concessionary-travel/example-service/photo/photo-guide', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var answer = req.query.answer

  if (answer === 'skip') {
    res.redirect('upload')
  } else if (answer === 'shop') {
    res.redirect('photo-shop')
  } else {
    res.render('service-patterns/concessionary-travel/example-service/photo/photo-guide')
  }
})

router.get('/service-patterns/parking-permit/example-service/eligible', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var answer = req.query.answer

  if (answer === 'No') {
    res.redirect('incorrect-address')
  } else {
    res.render('service-patterns/parking-permit/example-service/eligible')
  }
})

router.get('/service-patterns/concessionary-travel/example-service/confirm-address', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var answer = req.query.answer

  if (answer === 'No') {
    res.redirect('incorrect-dob')
  } else {
    res.render('service-patterns/concessionary-travel/example-service/confirm-address')
  }
})

router.get('/service-patterns/concessionary-travel/example-service/eligible', function (req, res) {
  // get the answer from the query string (eg. ?over18=false)
  var answer = req.query.answer

  if (answer === 'No') {
    res.redirect('incorrect-address')
  } else {
    res.render('service-patterns/concessionary-travel/example-service/eligible')
  }
})

router.get('/service-patterns/concessionary-travel/example-service/add-poa', function(req, res) {
  req.session.skip_verify = true

  res.render('service-patterns/concessionary-travel/example-service/add-poa')
})

router.get('/service-patterns/concessionary-travel/example-service/photo/success', function(req, res) {
  res.render('service-patterns/concessionary-travel/example-service/photo/success', { skip_verify: req.session.skip_verify})
})


router.get('/service-patterns/concessionary-travel/example-service/add-poa', function(req, res) {
  req.session.skip_verify = true

  res.render('service-patterns/concessionary-travel/example-service/add-poa')
})

router.get('/service-patterns/concessionary-travel/example-service/photo/success', function(req, res) {
  res.render('service-patterns/concessionary-travel/example-service/photo/success', { skip_verify: req.session.skip_verify})
})

module.exports = router
