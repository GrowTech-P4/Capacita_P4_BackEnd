const express = require('express');
const server = express();


server.get('/',(req,res)=>{
    console.log("Passando lindo");
    return res.json({message:"ok"});
});


server.listen(3000);
