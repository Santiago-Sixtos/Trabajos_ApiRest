const express = require('express');
const { check, validationResult } = require('express-validator')
const app = express();
 
const  cors  = require ('cors');
app.use(cors());
 
app.get('/usuario', check('edad').isNumeric(),(req,res)=>{
    const result = validationResult(req);

    if (result.isEmpty()) {
        res.send({mensaje:'Server Express contestando a peticion get'});
    } else {
        return res.status(400).json({errors: errors.array()});    
    } 
})
 
app.listen(3001,()=>{
    console.log('http://localhost:3000')
})

//Implementar un validor de un objeto que reciba de mi api