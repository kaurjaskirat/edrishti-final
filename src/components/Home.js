import React from 'react';
import background from './images/background.jpeg';
import home1 from './images/home1.jpeg';
import bg6 from './images/bg6.jpg';
import {BsFillArrowUpCircleFill} from "react-icons/bs";
import './Home.css';

const Home = () => {
return(
  

  <div id='home'>
       <div className="container">
 
       <div className="home" style={{backgroundImage:`url(${background})`,width:"120%",height:"790px"}} >

       <h2 className='homehead1'>aaa</h2>
<h2 className='homehead'>"Empowering </h2> 
<h2 className='homehead2'>Sightless </h2> <h2 className='homehead3'>minds with E-Drishti" </h2> 

<div className='hicon1'><BsFillArrowUpCircleFill /></div>
<div className='hicon'><a href ="#home"><BsFillArrowUpCircleFill style={{color:"orange"}}/></a></div>



       <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>


       </div>
       

       <div className='image'style={{backgroundColor:"rgb(175, 179, 182)",width:"120%"}} >
       <img src={home1} alt="this is car image" /></div>
      
       <div class="logos" style={{backgroundColor:"rgb(175, 179, 182)",width:"120%"}}>
      <div class="logos-slide" style={{backgroundColor:"rgb(175, 179, 182)"}}>
        <img src={bg6} />
        <img src={bg6} />
        <img src={bg6} />
        <img src={bg6}/>
        <img src={bg6}/>
        <img src={bg6}/>
        <img src={bg6} />
        <img src={bg6}/>
      </div>

      <div class="logos-slide">
        <img src={bg6} />
        <img src={bg6} />
        <img src={bg6} />
        <img src={bg6} />
        <img src={bg6} />
        <img src={bg6} />
        <img src={bg6} />
        <img src={bg6} />
      </div>
    </div>

       </div></div>
)
}
export default Home;