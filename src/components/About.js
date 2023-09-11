import React from 'react';
import bg6 from './images/bg6.jpg';
import about from './images/about (2).png';
import{Link} from 'react-router-dom';

import './About.css';

const About = () => {
return(
       <div id='about'>
 <div className='About' style={{marginBottom:"30%"}}>
      <div className='image3' >
       <img src={bg6} alt="this is car image" /></div>
       <div className='image4' >
       <img src={about} alt="this is car image" /></div>
      
<p className='p1'>OUR STORY.</p>
{/* <h1 className='p2'> do eiusmod tempor incididunt .
</h1> */}
<p className='p31'>
Our story is one of determination, innovation, and empowerment. Braille, an invaluable medium for the visually impaired, faces recognition challenges in mainstream education. While audio formats prevail, the scarcity of accessible learning materials, particularly in complex subjects like science and commerce, presents a pressing issue. Our journey at E-Drishti is fueled by these challenges and aspirations. We're committed to revolutionizing accessible education, empowering learners to conquer barriers in STEM fields. Despite Braille's challenges, its potential to shape an inclusive future knows no bounds.</p>


<button className='p4' style={{ fontStyle: "Outfit,sans-serif", padding:"25px 35px 25px 35px",marginLeft:"-45%",marginTop:"1%",fontSize:"90%",backgroundColor:"orange",color:"black",border:"none"}}><Link to='/moreabout' style={{textDecoration:"none", color:"black" }}>MORE ABOUT US</Link></button>
</div>
       </div>
  
)
}
export default About;