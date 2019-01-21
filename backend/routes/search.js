var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  console.log('a')
  console.log(req.body)
  var db=req.db;
  let query=db.select('*').from("hotel").where("district",req.body.district).innerJoin("roomType", 'hotel.id', "roomType.hotelID")
  query.then((rows)=>{
    res.send(rows);
  }).catch((error)=>{
    console.log(error);
    res.status(500).send({error:'cannot get hotel'})
});
});


module.exports = router;