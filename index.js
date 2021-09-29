const express= require ('express');
const app=express();
const userRouter=require('./router/userrouter')
const productRouter=require('./router/productrouter')
const cors=require ('cors')
app.use(express.json())

const corsopt={origin:['http://localhost:3000']}
const port = process.env.PORT || 5000;
app.use(cors(corsopt))
app.use('/user',userRouter)
app.use('/product',productRouter)


app.listen(port, () => {
    console.log("server started successfully");
})