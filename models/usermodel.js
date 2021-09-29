const mongoose=require('../connection')


const schema= new mongoose.Schema({

    name:String,
    email:String,
    username:String,
    psword:String,
    created:Date
    


})

const model=mongoose.model('table',schema)

module.exports=model