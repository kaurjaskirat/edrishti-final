import React from 'react';
import bg6 from './images/bg6.jpg';
import innovation from './images/innovation.png';
import graph from './images/graph.png';
import register from './images/register.png';
import hardware from './images/hardware.png';
import back from './images/back.png';


import './Features.css';

const Features = () => {
return(
 <div className='Feature' style={{marginBottom:"40%",marginTop:"-14%"}}>
     <h2 className="Featureh">FEATURES.</h2>

<div className='containerfeatures1'>
     <div className='cardfeatures1'>
        <div className='imgbox'>
            <img src={back} alt='aa'></img>
<div className='content1'>
    <h2>TalkBack Empowerment</h2>
    <p>Our Android application redefines accessibility through its complete integration with TalkBack, a voice read-aloud feature. This breakthrough functionality empowers users to navigate the entire application independently, eliminating the need for external assistance.</p>
</div>
        </div>
     </div></div>
       
     <div className='containerfeatures2'>
     <div className='cardfeatures2'>
        <div className='imgbox2'>
            <img src={hardware} alt='aa'></img>
<div className='content2'>
    <h2>Seamless Hardware Integration</h2>
    <p> Elevating the learning experience, our mobile application seamlessly interfaces with hardware devices via Bluetooth. This connection opens the door to immersive geometry practice and exploration. From Arduino to solenoid door locks, our application brings tangible interaction to the virtual realm.</p>
</div>
        </div>
     </div></div>
       

     <div className='containerfeatures3'>
     <div className='cardfeatures3'>
        <div className='imgbox3'>
            <img src={innovation} alt='aa'></img>
<div className='content3'>
    <h2>Innovative User Interface</h2>
    <p>  Elegantly crafted with Flutter, our mobile app presents an intuitive and user-friendly interface. This ensures an engaging and efficient learning experience, fostering a sense of empowerment for visually impaired users.</p>
</div>
        </div>
     </div></div>
       




     <div className='containerfeatures4'>
     <div className='cardfeatures4'>
        <div className='imgbox4'>
            <img src={graph} alt='aa'></img>
<div className='content4'>
    <h2>
Auditory Graphical Representation</h2>
    <p>  Graphical concepts come to life with live audio pitch sounds. This unique feature enriches the quiz and practice components, providing an auditory dimension to visual information. By bridging senses, we enhance comprehension and interaction.</p>
</div>
        </div>
     </div></div>



     <div className='containerfeatures5'>
     <div className='cardfeatures5'>
        <div className='imgbox5'>
            <img src={register} alt='aa'></img>
<div className='content5'>
    <h2>
    Robust Backend Connectivity</h2>
    <p> The synergy between Firebase and MongoDB establishes a rock-solid connection between the Flutter UI and the backend. This ensures smooth data flow, real-time updates, and a secure learning environment. </p>
</div>
        </div>
     </div></div>




{/* 
      <div className="fea2" style={{backgroundImage:`url(${background})`}} >    </div>
      <div className='fe2'> <h3 className='feah2'>Innovative User Interface</h3></div>



      <div className="fea3" style={{backgroundImage:`url(${background})`}} >   </div>
      <div className='fe3'> <h3 className='feah3'>Seamless Hardware Integration</h3></div>

   
      <div className="fea4" style={{backgroundImage:`url(${background})`}} >     </div>
      <div className='fe4'> <h3 className='feah4'>Auditory Graphical Representation</h3></div>
 
      
      <div className="fea5" style={{backgroundImage:`url(${background})`}} >      </div>
      <div className='fe5'> <h3 className='feah5'>Robust Backend Connectivity</h3></div> */}

   
     
       </div>
  
)
}
export default Features;