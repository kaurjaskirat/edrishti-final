import React from 'react';
import background from './images/background.jpeg';
import bg6 from './images/bg6.jpg';

import './Moreabout.css';

const Moreabout = () => {
return(
    <div id='story'>
 <div className='Moreabout' style={{marginBottom:"46%",backgroundColor:"rgb(201, 204, 206)",height:"1650px"}}>
 <img src={background} alt="this is car image" style={{height:"280px",width:"100%",opacity:"0.8"}}/>
 <h1 className="Moreh">OUR STORY</h1>
 <p className="Morep">
In the heart of Delhi, Shyam Kishore, himself visually impaired, shines as a massage trainer at the Blind Relief Association. This Delhi-based NGO is tirelessly dedicated to empowering those with visual impairments. With an unwavering commitment, Shyam's students grasp the foundation of Braille, gaining the ability to read and write alphabets. Their aspirations, however, stretch beyond basic literacy. These aspiring professional masseurs, most with high school education, not only hone their vocational skills but also harbor an ardent desire to master Braille. This tactile language serves as a profound means of communication for them.</p>
<p className="Morep1">Yet, despite its significance, Braille's widespread recognition remains a challenge. In mainstream schools, the instruction predominantly comes through audio formats, with Braille learning relegated to specialized institutions for the visually impaired. The translation of books into Braille introduces new obstacles, as these texts become bulky and expensive. While software like JAWS, Kurzweil, and Abbyy Fine Reader assist in screen reading and examination-taking, these solutions don't supplant Braille's unique benefits. Those familiar with Braille consistently express a preference for physical Braille books over their audio counterparts.</p>
    <p className='Morep2'>The history of Braille in India reaches back to the nation's independence, when the government aimed to forge a standardized Braille code for Indian languages. From this aspiration, "Bharati Braille" emerged, a phonetics-based system that emphasizes sound representation.</p>
    <p className='Morep3'>The scarcity of accessible learning materials, particularly in science and commerce, underscores one of the community's most pressing issues. The hurdles encountered stem from the tactile nature of Braille, posing challenges for those with insensitive fingertips or multifaceted needs. These challenges intensify during the study of contracted Braille. The broader questions that arise revolve around enabling successful Braille literacy and functional reading skills for visually impaired children and learners with additional needs.</p>
    <p className='Morep4'>
Braille, while indispensable, arrives with its own set of challenges. It demands time, not all materials are readily available in Braille, and the constraints of timed examinations make it difficult. Subjects like mathematics, science, and accountancy, involving intricate data handling, present formidable hurdles for blind students. Comprehending lengthy concepts, performing calculations, practicing questions, visualizing graphs, and analyzing data require exceptional effort. Although screen reader software offers valuable support, its limitations necessitate external assistance for comprehensive understanding.</p>
<p className='Morep5'>Filling gaps, educators often resort to innovative methods. Figures and graphs come alive through tactile explanations, constructing intricate shapes by touch. Quadrants materialize through vertically and horizontally arranged pens, while the economic PPC graph takes form through the curvature of a palm. These personalized approaches underscore the remarkable determination of visually impaired individuals to conquer knowledge barriers.</p>
      
<div className='mimag1' >
       <img src={bg6} alt="this is car image" /></div>
       <div className='mimag2' >
       <img src={bg6} alt="this is car image" /></div>
       <div className='mimag3' >
       <img src={bg6} alt="this is car image" /></div>
     
       </div>
  
       </div>
)
}
export default Moreabout;