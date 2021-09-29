const express=require('express')
const route=express.Router()
const Model=require('../models/productmodel')

route.post('/insert',(req,res)=>{
    const data= req.body
    console.log(data)

    new Model(data).save()
    .then(()=>{
        console.log('product successfully saved')
        res.status(200).json({message:'Success'})
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
route.delete('/delete/:id',(req,res)=>{
    Model.findByIdAndDelete(req.params.id)
    .then((data)=>{
        console.log(data)
        res.status(200).json(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json(err)

    })
})

route.put('/update/:id',(req,res)=>{
    console.log(req.body)
    Model.findOneAndUpdate(req.params.id,req.body)
    .then((data)=>{
        console.log('data updated ')
        res.status(200).json({message:'success'})
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports=route