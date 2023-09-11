import React from 'react';
import './Footer.css';
import background from './images/background.jpeg';import drishtif from './images/drishtif.png';
import {FaLinkedin,FaInstagramSquare} from "react-icons/fa";
// import {FaLinkedin,FaGithubSquare,FaInstagramSquare,FaMailBulk,FaTelegramPlane ,FaFacebook} from "react-icons/fa";
const Footer = () =>{
    return(
        
      <div className="footer" style={{backgroundImage:`url(${background})`,width:"120%",height:"495px",marginTop:"15%"}} >
    
<div className="head8" >
   <h1 className="head" style={{color:"grey",fontSize:"2px"}}>It's Time to Pull in a
   </h1>
   </div>
   <div className="footer1" >
   <h1 className="heads">It's Time to Pull in a</h1>
    <p className="para" >Professional</p>
   </div>   <div className='imagefooter' >
       <img src={drishtif} alt="this is car image" /></div> 


  <h3 className="head2" style={{color:"white"}}>Menu   </h3> <div className="para4">
    <h5 className="head21">HOMEPAGE</h5>
    <h5 className="head22">ABOUT</h5>
    <h5 className="head23">CONTACT</h5>

   </div>
   <div className="hh">
   <h3 className="head3" style={{color:"white"}}>Useful links</h3>
   <div className="para5">
   <h5 className="para51">LINKED IN</h5>
   <h5 className="para52">INSTRAGRAM</h5>
   </div></div>
   <div className="hh1">
    <h3 className="head4" style={{color:"white"}}>Contact Us</h3>
    <div className="para6">
   <h5>addfghjdkkkkd</h5><p className="para3">677788888</p></div>
   </div>
   
   <div className='icon1'>
   <FaLinkedin style={{marginLeft:"58%",color:"white",fontSize:"26px"}} /></div>
   <div style={{marginTop:"-2%"}} className="icon2">
                <FaInstagramSquare style={{marginLeft:"63%",color:"white",fontSize:"26px",marginTop:"0.3%"}}/></div>

<div className='back'  >
<p  className='backp'style={{fontSize:"0px"}}>© 2023 eDrishti</p>
  <p  className='backp'>© 2023 eDrishti</p>
</div>
   </div>
    )
}

export default Footer;