import React,{useState,useEffect} from 'react';
import {FaLinkedin,FaInstagramSquare} from "react-icons/fa";
import './Navbar.css';
import drishtif from './images/drishtif.png';

const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false)
  const[screenWidth,setScreenWidth]=useState(window.innerWidth)
  const toggleNav=()=>{
    setToggleMenu(!toggleMenu)
  }
useEffect(()=>{
const changeWidth=()=>{
  setScreenWidth(window.innerWidth)
}
window.addEventListener('resize',changeWidth)


},[])
  return (


    <div className='container'>
    
        <nav>
     
          {(toggleMenu || screenWidth>450) && (
            <ul className='list'>
                             
        <p className='logo'>    <div className='imagenav' >
       <img src={drishtif} alt="this is car image" /></div> <div className='nap'>eDrishti</div></p>
                <li className='items' style={{marginLeft:"15%"}}><a href ="#home">Home</a></li>
                <li className='items'><a href ="#about">About</a></li>
                {/* <li className='items'><a href ="#skills">Skills</a></li>
                <li className='items'><a href ="#work">Work</a></li> */}
                <li className='items' style={{marginRight:"10%"}}><a href ="#contact">Contact</a></li>
                <FaLinkedin className='navicon1' />
                <FaInstagramSquare  className='navicon2'  />
            </ul>)}
            <button onClick={toggleNav} className='btn'>☰</button>

       
       
        </nav>
        </div>
  );

}

export default Navbar;
