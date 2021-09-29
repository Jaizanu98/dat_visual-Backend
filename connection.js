const mongoose= require('mongoose')
const db_url= require('./config').db_url;

mongoose.connect(db_url)
.then((data)=>{
    console.log('database connected')

})
.catch((err)=>{
    console.error(err)
})

module.exports=mongoose