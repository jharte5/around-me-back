const express = require('express');
const router = express.Router();
const Auto = require('../models/Auto');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/auto', (req,res) => {
  const newAuto = new Auto();
  newAuto.service = req.body.service;
  newAuto.name = req.body.name;
  newAuto.city = req.body.city;
  newAuto.price = req.body.price;
  newAuto.address = req.body.address;
  newAuto.phone = req.body.phone;
  newAuto.website = req.body.website;
  newAuto.save().then((auto) => {
    return res.json(auto)
  });
});

router.get('/autos',(req,res) => {
  Auto.find({}).then((autos)=> {
    autos.reverse();
    return res.json(autos);
  })
});

// router.delete('/auto/:id', (req, res) => {
//   Auto.findByIdAndDelete({_id: req.params.id}).then (
//     res.json({message: 'deleted'})
//   )
// });

router.get('/auto/:id', (req, res) => {
  Auto.findById({_id: req.params.id}).then((auto) => {
    return res.json(auto)
  });
});

router.put('/auto/:id', (req,res) => {
  Auto.findById({ _id: req.params.id}).then(( auto) => {
    auto.service = req.body.service ? req.body.service : auto.service;
    auto.name = req.body.name ? req.body.name : auto.name;
    auto.city = req.body.city ? req.body.city : auto.city;
    auto.price = req.body.price ? req.body.price : auto.price;
    auto.address = req.body.address ? req.body.address : auto.address;
    auto.phone = req.body.phone ? req.body.phone : auto.phone;
    auto.website = req.body.website ? req.body.website : auto.website;
    auto.save().then((auto) => res.json(auto));
  });
});

module.exports = router;
