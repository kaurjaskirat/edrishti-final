import React from 'react';
import bg6 from './images/bg6.jpg';
import research from './images/research.jpg';import achieve1 from './images/achieve1.jpg';import achieve2 from './images/achieve2.jpg';
import achieve3 from './images/achieve3.jpg'



import './Achievement.css';

const Achievement = () => {
return(
 <div className='Achievement' style={{marginBottom:"70%"}}>
      {/* <div className='imag' >
       <img src={bg6} alt="this is car image" /></div> */}
     
<p className='ap'>ACHIEVEMENTS</p>
<div className='abpara'>"These achievements fuel our commitment to accessible education. At E-Drishti, every recognition drives positive change."</div>

      

   <div className="container11">
<div className='ac1'>
    <div className='acp1'><img src={bg6} alt="this is car image" /></div>
    <p className="actp1" style={{fontSize:"18px" ,marginTop:"1%"}}>Recognised by Microsoft as the Best Education Sector Innovation, earning it National Recognition.</p>
</div>
<div className='ac2'>
    <div className='acp2'><img src={bg6} alt="this is car image" /></div>
    <p className="actp2" style={{fontSize:"18px",marginTop:"1%"}}>Acknowledged by Google as one of the Top 100 products worldwide.</p>
</div>
<div className='ac3'>
    <div className='acp3'><img src={achieve1} alt="this is car image" /></div>
    <p className="actp3"style={{fontSize:"18px",marginTop:"1%"}}>Honored with the "Best Innovation Award" by Voice of Specially Abled People, accredited with UN COSP Welfare.</p>
</div>
<div className='ac4'>
    <div className='acp4'><img src={achieve3} alt="this is car image" /></div>
    <p className="actp4"style={{fontSize:"18px",marginTop:"1%"}}>Offered Incubation Support by UNICEF Subsidiary, VOSAP in Ahmedabad, Gujarat.</p>
</div>

<div className='ac5'>
    <div className='acp5'><img src={research} alt="this is car image" /></div>
    <p className="actp5"style={{fontSize:"18px",marginTop:"1%"}}>Awarded Best Research Paper title by IOP Publishing for the year 2023.
Paper ID: 103</p>
</div>
<div className='ac6'>
    <div className='acp6'><img src={achieve2} alt="this is car image" /></div>
    <p className="actp6"style={{fontSize:"18px",marginTop:"1%"}}>Ranked among Top 5 Welfare products in Blind Education at SIH National Competition 2022</p>
</div>

<div className='ac7'>
    <div className='acp7'><img src={bg6} alt="this is car image" /></div>
    <p className="actp7"style={{fontSize:"18px",marginTop:"1%"}}>Triumphed at AKGEC Startup Conclave in partnership with AICTE and AKTU, Lucknow.</p>
</div>

<div className='ac8'>
    <div className='acp8'><img src={bg6} alt="this is car image" /></div>
    <p className="actp8"style={{fontSize:"18px",marginTop:"1%"}}>2x Runner-Up at Synopsys Inc. Social Innovation Competition.</p>
</div>
       
<div className='ac9'>
    <div className='acp9'><img src={bg6} alt="this is car image" /></div>
    <p className="actp9"style={{fontSize:"18px",marginTop:"1%"}}>Reached the final phase of being recognized by the (MoE) as a Government Funded Welfare Startup.</p>
</div>

</div>

      
       </div>
  
  
)
}
export default Achievement;

