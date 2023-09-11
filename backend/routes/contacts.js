const express=require("express");
const Contact=require('../models/contact')

const router=express.Router()
// router.get('/',(req,res)=>{
//     res.send("get request")
// })


router.get("/",async(req,res)=>{
        try{
            const contacts= await Contact.find()
                res.json(contacts)
        }catch(err){
            res.send('error'+err)
        }
    })

    router.post('/',async(req,res)=>{
    const contact=new Contact({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message,

    })
    try{
const a1= await contact.save()
res.json(a1)
    }catch(err){
res.send('ok')
    }
})



// router.get("/",async(req,res)=>{
//     try{
//         const aliens= await Alien.find()
//             res.json(aliens)
//     }catch(err){
//         res.send('error'+err)
//     }
// })
// router.post('/',async(req,res)=>{
//     const alien=new Alien({
//         name:req.body.name,
//         tech:req.body.tech,

//     })
//     try{
// const a1=await alien.save()
// res.json(a1)
//     }catch(err){
// res.send('error')
//     }
// })
// router.patch('/:id',async(req,res)=>{
//     try{
//         const alien=await Alien.findById(req.params.id)
//         alien.tech=req.body.tech
//         const a1=await alien.save()
//         res.json(a1)
//     }catch(err){
// res.send('error')
//     }
// })

// router.delete('/:id',async(req,res)=>{
//     try{
//         const alien=await Alien.findById(req.params.id)
//         alien.tech=req.body.tech
//         const a1=await alien.remove()
//         res.json(a1)
//     }catch(err){
// res.send('error')
//     }
// })



module.exports = router;