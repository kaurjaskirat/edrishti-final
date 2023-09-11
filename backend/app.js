const express=require("express");
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();

const app=express()

mongoose.set('strictQuery', true);
mongoose.connect( process.env.MONGODB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const con=mongoose.connection
con.on('open',()=>{
    console.log('DB connected')
})


   
app.use(express.json());app.use(cors())

// const alienRouter=require('./routes/aliens')
// app.use('/aliens',alienRouter)


const contactRouter=require('./routes/contacts')
app.use('/contacts',contactRouter)

app.listen(process.env.PORT,function(){
    console.log('server started')
})