const express = require("express");
const router = express.Router();
const response = require("./../../network/response");
const contoller = require("./controller");

router.post('/', function(req,res){
    contoller.addUser(req.body.name)
    .then(data => {
        response.success(req,res,data,201)
    })
    .catch(err =>{
        response.error(req,res,'internal error',500,err)
    });
})
router.get('/', function(req,res){
        contoller.listUser()
        .then(user => {
            response.success(req,res,user,200);
        })
        .catch(err => {
            response.error(req,res,'internal error', 500,err);
        })

})

module.exports = router;