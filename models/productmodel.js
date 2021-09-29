const mongoose=require('../connection')

const schema=new mongoose.Schema({
    name:'String',
    brand:'String',
    price:'Number',
    category:'String',
    created:'Date'

})

const model=mongoose.model('prod',schema)
module.exports=model