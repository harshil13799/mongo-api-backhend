var express = require('express');
var router = express.Router();
var user = require('../models/user');

router.post('/',function(req,res,next){
const use=new user({
    name : req.body.name,
    age : req.body.age,
    country : req.body.country
});
use.save(function(err,result){
    console.log(result);
    if(err){
        res.json(err);
    }
    else{
        res.json(result);
    }
});
});
router.get('/',function(req,res,next){
    user.find(function(err,docs){
        if(err){
            console.log(err);
            res.json(err);
        }
        else{
            res.json(docs);
        }
    });
});
router.get('/:id',function(req,res,next){
    user.find(function(err,docs){
        if(err){
            console.log(err);
            res.json(err);
        }
        else{
            res.json(docs);
        }
    });
});
router.delete('/:id',function(req,res,next){
    user.deleteOne({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
router.put('/:id',function(req,res,next){
    var item = {
        name:req.body.name,
        age:req.body.age,
        country:req.body.country
      };
    user.updateOne({_id:req.params.id},{$set: item},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports=router;