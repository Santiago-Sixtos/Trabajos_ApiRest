const express = require('express');
const app = express();
 
const  cors  = require ('cors');
app.use(cors());
 
 
app.get('/',(req,res)=>{
    if (tru) {
        res.json({mensaje:'Server Express contestando a peticion get'})
    } 
    else{
        res.json({mensaje: 'Server contestando a peiticón get'})
        next(err);
    }
}) 

app.use((err, req, res, next)=>{
    console.log(err);
    res.status(501);
    res.json({error:err.message});
})

app.listen(3001,()=>{
    console.log('http://localhost:3000')
})