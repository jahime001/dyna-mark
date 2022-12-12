import React from 'react'
import './About.css'
import about from '../../assets/About.png'
import { useState } from 'react'

export default function About() {
  const [myclass, setmyClass] = useState('hide')

  let handleShow = () => {
       const y = window.scrollY;
       if (y >= 300) {
           setmyClass("show")
       } else {
           setmyClass("hide")
       }
   };
  
window.addEventListener("scroll", handleShow);

  return (
    <div className='Info'>
        <h1>What is Dyna-Mark</h1>
        <div> 
          <div className='about' style={{ transition: "all 1s" }}>
                <div className='art' style={{ backgroundImage: `url(${about})`, backgroundPosition: "center"}}>
              </div>
              
              <h1>About the creators of <span>Dyna-Mark</span></h1>
              <p>We are 3 classmates that thought it would be</p>
              
            </div></div>
        <div className='boxes'>
            
            <div className={`${myclass}`} style={{ transition: "all 1.5s" }}>
                <div className='art' style={{ backgroundImage: `url(${about})`, backgroundPosition: "center" }}>
               </div>
                <h1><span2>Follow</span2> us!</h1>
                {/* <p><a href={https://www.linkedin.com/in/morgan-arancibia/}>Morgan's LinkedIn</a></p> */}
            </div>
            <div className={`${myclass}`} style={{ transition: "all 1.5s" }}>
                <div className='art' style={{ backgroundImage: `url(${about})`, backgroundPosition: "center" }}>
               </div>
                <h1><span2>Follow</span2> us!</h1>
                {/* <p><a href={https://www.linkedin.com/in/morgan-arancibia/}>Morgan's LinkedIn</a></p> */}
            </div>
            <div className={`${myclass}`} style={{ transition: "all 1.5s" }}>
                <div className='art' style={{ backgroundImage: `url(${about})`, backgroundPosition: "center" }}>
               </div>
                <h1><span2>Follow</span2> us!</h1>
                {/* <p><a href={https://www.linkedin.com/in/morgan-arancibia/}>Morgan's LinkedIn</a></p> */}
            </div>
            </div>
    </div>
  )
}
