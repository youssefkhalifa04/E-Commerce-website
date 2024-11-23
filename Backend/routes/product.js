const express = require('express');
const router = express.Router();


router.get('/products' ,(req, res)=>{
    res.send("all products")
})

module.exports=router;
