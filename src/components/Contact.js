
// import React,{useState} from 'react';
// import axios from 'axios';
// import './Contact.css';
// import background from './images/background.jpeg';
// import {GoMail} from "react-icons/go";
// import {BsTelephonePlus} from "react-icons/bs";



// const Contact = () => {


//     const[name,setName]=useState('')
//     const[email,setEmail]=useState('')
//     const[message,setMessage]=useState('');

// const handleName=(e)=>{
//     setName(e.target.value);
// }

// const handleEmail=(e)=>{
//     setEmail(e.target.value);
// }
// const handleMessage=(e)=>{
//     setMessage(e.target.value);
// }

//     const handleClick=()=>{console.log({name,email,message});
        
//             axios.post('https://contact-hg14.onrender.com/contacts',{
//         name:name,
//         email:email,
//         message:message
//         })
//         .then(res=>{ console.log(res)
//             alert('successfully registered')
//             })
//             .catch(error=>{
//                 console.log(error)
//             })
        
       
        
        
//         }
            


// return(
//     <div>
    


//         <div id='contact'>
        
//     <div className='Contact ' style={{marginBottom:"25%"}}>
      
//       <img src={background} alt="this is car image" style={{height:"180px",width:"120%",opacity:"0.5"}}/>
      
 
//       <p style={{color:"orange",marginLeft:"-67%",marginTop:"5%",  fontStyle: "sans-serif"}}>CONTACT</p>
      
//  <GoMail style={{color:"orange",marginLeft:"5",marginTop:"-65%",fontSize:"50px"}}/><p style={{marginLeft:"13%",marginTop:"-2%",fontStyle: "Outfit,sans-serif"}}>gamilbbbbbb</p>
//  <div className="conp" style={{marginTop:"-2%"}}><BsTelephonePlus  style={{color:"orange",marginLeft:"40%",marginTop:"-5%",fontSize:"50px"}}/>     <p className=".conpp" style={{marginLeft:"53%",marginTop:"-2%",fontStyle: "Outfit,sans-serif"}}>456789999</p></div>
//  <h1 className="ch" style={{marginTop:"-2%",fontSize:"40px",fontStyle: "sans-serif"}}>Get in touch</h1>

//  <form style={{marginTop:"14%"}}className='contact__form'>
//                     <div className='contact__form-div'>
                     
//                         <label className='contact__form-tag' style={{marginLeft:"-73%",fontSize:"15px",marginBottom:"-30%",fontStyle: "sans-serif"}}>NAME</label>
//                      <div className='tag'> <input type='text'  placeholder='name'  className='contact__form-input' value={name} onChange={handleName} /></div> 


                     
//                     </div>
//                     <div className='contact__form-div'style={{marginTop:"-4%"}}>
//                         <label className='contact__form-tag1'style={{marginLeft:"17%",fontSize:"15px",marginBottom:"-30%",fontStyle: "sans-serif"}}>MAIL⋆</label>
//                         <div className='tag1'>  <input type='email' placeholder='email' className='contact__form-input1' value={email} onChange={handleEmail}  /></div>
                      
//                     </div>
//                     <div className='contact_form-div-contact_form-area'style={{marginTop:"6%"}}>
//                         <label className='contact__form-tag2'style={{marginLeft:"-73%",fontSize:"15px",fontStyle: "sans-serif"}}>MESSAGE</label>
//                         <div className='tag2'>   <textarea name='project'  cols='10' rows='6'  className='contact__form-input2' value={message} onChange={handleMessage}  /></div>
                 
//                     </div>
//                     <div className='contact__form-div'style={{marginTop:"-10%"}}>
//                         <p className="cp" style={{  marginLeft:"-45%",marginTop:"15%",color:"grey",fontStyle: "sans-serif"}}>*We promise not to disclose your personal information to third party</p>
//                         <button className='cb' style={{  padding:"35px 20px 25px 20px",marginLeft:"40%",marginTop:"-27%",fontSize:"90%",backgroundColor:"orange",color:"rgb(57, 57, 57)",border:"none",fontStyle: "Outfit,sans-serif"}}  onClick={handleClick}  >SEND MESSAGE</button>
//                         </div>  </form>
//       </div>
//       </div></div>
// )
// }
// export default Contact;









import React,{useState} from 'react';
import axios from 'axios';

import './Contact.css';
import background from './images/background.jpeg';
import {GoMail} from "react-icons/go";
import {BsTelephonePlus} from "react-icons/bs";



function Register(){
const[name,setName]=useState('')
const[email,setEmail]=useState('')
const[message,setMessage]=useState('')


const handleApi=()=>{
console.log({name,email,message});
if(name && email&& message){

    axios.post('https://contact-hg14.onrender.com/contacts',{
name:name,
email:email,
message:message
})
.then(result=>{
    console.log(result)
    alert('message send successfully')
    })
    .catch(error=>{
        console.log(error)
    })
}
else {
    alert("invalid")
}

// 

}
    
    return(

        <div id='contact'>
        
    <div className='Contact ' style={{marginBottom:"25%"}}>
      
      <img src={background} alt="this is car image" style={{height:"180px",width:"120%",opacity:"0.5"}}/>
      
 
      <p style={{color:"orange",marginLeft:"-67%",marginTop:"5%",  fontStyle: "sans-serif"}}>CONTACT</p>
      
 <GoMail style={{color:"orange",marginLeft:"5",marginTop:"-65%",fontSize:"50px"}}/><p style={{marginLeft:"13%",marginTop:"-2%",fontStyle: "Outfit,sans-serif"}}>gamilbbbbbb</p>
 <div className="conp" style={{marginTop:"-2%"}}><BsTelephonePlus  style={{color:"orange",marginLeft:"40%",marginTop:"-5%",fontSize:"50px"}}/>     <p className=".conpp" style={{marginLeft:"53%",marginTop:"-2%",fontStyle: "Outfit,sans-serif"}}>456789999</p></div>
 <h1 className="ch" style={{marginTop:"-2%",fontSize:"40px",fontStyle: "sans-serif"}}>Get in touch</h1>

       


        <div className='contact__form-div' style={{marginTop:"10%"}}>
        <label className='contact__form-tag' style={{marginLeft:"-73%",fontSize:"15px",marginBottom:"-30%",fontStyle: "sans-serif"}}>NAME</label>
        <div className='tag'><input type='text' placeholder='please enter name' value={name} onChange={(e)=>setName(e.target.value)}   className='contact__form-input'></input></div>
       </div>

       <div className='contact__form-div'style={{marginTop:"-4%"}}>
        <label className='contact__form-tag1'style={{marginLeft:"17%",fontSize:"15px",marginBottom:"-30%",fontStyle: "sans-serif"}}>MAIL⋆</label>
        <div className='tag1'>  <input type='email' placeholder='please enter email' value={email} onChange={(e)=>setEmail(e.target.value)} className='contact__form-input1'></input></div>
       </div>

       <div className='contact_form-div-contact_form-area'style={{marginTop:"6%"}}>
        <label className='contact__form-tag2'style={{marginLeft:"-73%",fontSize:"15px",fontStyle: "sans-serif"}}>MESSAGE</label>
        <div className='tag2'></div> <input type='message'  value={message} onChange={(e)=>setMessage(e.target.value)}  className='contact__form-input2'></input></div>
       </div>
       
        {/* <button onClick={handleApi}>SEND MESSAGE</button><br></br><br></br> */}
        <div className='contact__form-div'style={{marginTop:"-10%"}}>
        <p className="cp" style={{  marginLeft:"-45%",marginTop:"5%",color:"grey",fontStyle: "sans-serif"}}>*We promise not to disclose your personal information to third party</p>
        <button className='cb' style={{  padding:"35px 20px 25px 20px",marginLeft:"40%",marginTop:"-27%",fontSize:"90%",backgroundColor:"orange",color:"rgb(57, 57, 57)",border:"none",fontStyle: "Outfit,sans-serif"}} onClick={handleApi}  >SEND MESSAGE</button>
    </div>
    </div>

    )
}
export default Register;







