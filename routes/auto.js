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

router.delete('/auto/:id', (req, res) => {
  Auto.findByIdAndDelete({_id: req.params.id}).then (
    res.json({message: 'deleted'})
  )
});

router.get('/auto/:id', (req, res) => {
  Auto.findById({_id: req.params.id}).then((auto) => {
    return res.json(auto)
  });
});

router.put('/auto/:id', (req,res) => {
  Auto.findById({ _id: req.params.id}).then(( auto) => {
    auto.service = req.body.service ? req.body.service : auto.service;
    auto.save().then((auto) => res.json(auto));
  });
});

module.exports = router;
