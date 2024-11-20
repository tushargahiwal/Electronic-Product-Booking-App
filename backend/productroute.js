const { add1,test1,getOne1,getOneId1,deleteOne1,updateOne1} = require ('./productcontroller')
const express=require('express');
const Controller=require('./productcontroller');

const route=express.Router();

route.post('/addproduct',add1);
route.get('/getproduct',test1);
route.get('/getoneproduct',getOne1);
route.get('/getproduct/:id',getOneId1);
route.delete('/deleteproduct/:id',deleteOne1);
route.put('/updateproduct/:id',updateOne1);

module.exports=route;