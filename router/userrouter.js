const express = require('express')
const route=express.Router()
const Model=require('../models/usermodel')

route.post('/add',(req,res)=>{
    const data=req.body
    console.log(data)

    new Model(data).save()
    .then(()=>{
        console.log('data successfully saved')
        res.status(200).json({message:'Success'})
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
})

route.get('/getbyemail/:eml',(req,res)=>{
    Model.findOne({email:req.params.eml})
    .then((data)=>{
        console.log(data)
        res.status(200).json(data)
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
})

route.get('/getall',(req,res)=>{
    Model.find({})
    .then((data)=>{
        console.log('data')
        res.status(200).json(data)
    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)
    })
})

route.delete('/deletebyid/:id',(req,res)=>{
    Model.findByIdAndDelete(req.params.id)
    .then((data)=>{
        console.log(data)
        res.status(200).json(data)

    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)

    })
})

route.put('/update/:id',(req,res)=>{
    console.log(req.body)
    Model.findByIdAndUpdate(req.params.id,req.body)
    .then((data)=>{
        console.log('data updated')
        res.status(200).json({message:'Success'})

    })
    .catch((err)=>{
        console.error(err)
        res.status(500).json(err)

    })
})


module.exports=route