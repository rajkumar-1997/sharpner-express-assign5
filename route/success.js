const express=require('express');
const path=require('path');
const router =express.Router();
const rootDir=require('../utill/path.js');
router.get('/success',(req,res,next)=>{
   res.sendFile(path.join(rootDir,'views','success.html'))
});

// router.post('/contactus',(req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/success');
// });

module.exports=router;