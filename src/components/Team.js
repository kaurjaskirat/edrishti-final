import React from 'react';
import ReactPlayer from 'react-player';
import sneha from './images/sneha.JPEG';
import rishikesh from './images/rishikhesh.png';
import adarsh from './images/Adarsh.jpg';
import aabhaas from './images/aabhaas.jpeg';
import ishika from './images/ishika.jpg';
import ishita from './images/ishita.png';
import video from './videos/validation.mp4'

import {FaLinkedin} from "react-icons/fa";
import { SimpleSlider } from './SimpleSlider';

import './Team.css';


const Team = () => {
return(
 <div className='Team' style={{marginBottom:"40%",backgroundColor:"rgb(222, 216, 216)"}}>
      {/* <div className='imag' >
       <img src={bg6} alt="this is car image" /></div> */}
     
<p className='paraaa'>OUR TEAM</p>
<p className='paraaaa'>OUR TEAM</p>
<h5  className='hee'>     Meet our friendly team of professionals.</h5>
       <div className="container1">
<div className='card1'>
<div class="imagec">
		<img class="image__img" src={ishita} alt="Bricks"/>
		<div class="image__overlay image__overlay--primary">
			<div class="image__title">  <a href="https://www.linkedin.com/in/ishita-kapoor26"><FaLinkedin/></a></div>
		</div>
	</div>
    <h2 className="th1" style={{marginTop:"2%"}}>ISHITA KAPOOR</h2>
    <p className="tp1" style={{fontSize:"20px"}}>Founder & CEO</p>
</div>
<div className='card2'>
<div class="imagec">
		<img class="image__img" src={adarsh} alt="Bricks"/>
		<div class="image__overlay image__overlay--primary">
			<div class="image__title"><a href="https://www.linkedin.com/in/adarsh-goyal-20a73b246"><FaLinkedin/></a></div>
		</div>
	</div>
    <h2 className="th1" style={{marginTop:"-1%"}}>ADARSH GOYAL</h2>
    <p className="tp1" style={{fontSize:"20px"}}>Co-Founder & CTO</p>
</div>
<div className='card3'>
<div class="imagec">
		<img class="image__img" src={aabhaas} alt="Bricks"/>
		<div class="image__overlay image__overlay--primary">
			<div class="image__title"><a href="https://www.linkedin.com/in/aabhaas-sikka-a84967147"><FaLinkedin/></a></div>
		</div>
	</div>
    <h2 className="th1" style={{marginTop:"-1%"}}>AABHAAS SIKKA</h2>
    <p className="tp1"style={{fontSize:"20px"}}>COO</p>
</div>
<div className='card4'>
<div class="imagec">
		<img class="image__img" src={ishika} alt="Bricks"/>
		<div class="image__overlay image__overlay--primary">
			<div class="image__title"><a href="https://www.linkedin.com/in/ishika-punchariya-7a286121b"><FaLinkedin/></a></div>
		</div>
	</div>
    <h2 className="th1" style={{marginTop:"-1%"}}>ISHIKA PUNCHARIYA</h2>
    <p className="tp1"style={{fontSize:"20px"}}>Designer Team Lead</p>
</div>

<div className='card5'>
<div class="imagec">
		<img class="image__img" src={sneha} alt="Bricks"/>
		<div class="image__overlay image__overlay--primary">
			<div class="image__title"><a href="https://www.linkedin.com/in/sneha-gupta-61a909237"><FaLinkedin/></a></div>
		</div>
	</div>
    <h2 className="th1" style={{marginTop:"-1%"}}>SNEHA GUPTA</h2>
    <p className="tp1"style={{fontSize:"20px"}}>Web Developer</p>
</div>
<div className='card6'>
<div class="imagec">
		<img class="image__img" src={rishikesh} alt="Bricks"/>
		<div class="image__overlay image__overlay--primary">
			<div class="image__title"><a href="https://www.linkedin.com/in/rishikeshranjan"><FaLinkedin/></a></div>
		</div>
	</div>
    <h2 className="th1" style={{marginTop:"-1%"}}>RISHIKESH</h2>
    <p className="tp1"style={{fontSize:"20px"}}>Consultant</p>
</div>




       </div>
       
       <div className='Video' style={{marginBottom:"40%",backgroundColor:"rgb(222, 216, 216)",marginTop:"30%"}}>
    
     {/* <ReactPlayer */}
	 {/* className="video2" */}
	
	 {/* <video controls width="100%">
      <source src={video} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video> */}
            {/* height='470px'
            width='100%' */}
            {/* controls={true} />  */}
{/* 
<div className="vid">
    <h1>hi</h1>
</div> */}

	 <video controls width="100%" height='470px'>
      <source src={video} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>


       </div>
 
<div className="slider"><SimpleSlider/>

<div className="side">
    <p className="sidep">REVIEWS</p>
    <h2 className="sideh">They talk about us</h2>
</div></div>

       </div>
  
  
)
}
export default Team;