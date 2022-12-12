import React from 'react'
import './About.css'
import about from '../../assets/About.png'
import { useState } from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

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
      <div>
        <div className='about'>
          <div className='art' style={{ backgroundImage: `url(${about})`, backgroundPosition: "center" }}>
          </div>

          <h1>About the creators of <span>Dyna-Mark</span></h1>
          <h2>We are students in a Software Engineering Bootcamp that were given the task to create a full stack application. Going through several ideas we decided to go with one idea we thought would be the most helpful! Big shoutout to our TA's for helping us with this Dynamic Bookmark idea.
            <br />
            We hope that this benefits those on their journey to become a Software Engineer, because we know how hard it can be but with the proper resources and determination <span2>YOU CAN DO IT!</span2> 
          </h2>

        </div>
      </div>
      <br />
      <div className='follow'>
        <h1><span>Scroll</span> if you want to follow us along our <span2>journey</span2>!</h1>

      </div>
      <div className='boxes2'>

        <div className={`${myclass}`} style={{ transition: "all 1.5s" }}>
          <div className='art2' style={{ backgroundImage: `url(${about})`, backgroundPosition: "center" }}>
          </div>
          <h1>Bibhor Gurung</h1>
          <p><a className='anchor' href={'https://www.linkedin.com/in/bibhor2000/'} target='_blank'> <FaLinkedin/> LinkedIn </a></p>
          <p><a className='anchor' href={'https://github.com/Bibhor2000'} target='_blank'><FaGithub/> GitHub</a></p>
        </div>
        <br />
        <div className={`${myclass}`} style={{ transition: "all 1.5s" }}>
          <div className='art2' style={{ backgroundImage: `url(${about})`, backgroundPosition: "center" }}>
          </div>
          <h1>Jahime Cameau</h1>
          <p><a className='anchor' href={'https://www.linkedin.com/in/jahimecameau/'} target='_blank'> <FaLinkedin/> LinkedIn </a></p>
          <p><a className='anchor' href={'https://github.com/jahime001'} target='_blank'><FaGithub/> GitHub</a></p>
        </div>
        <br />
        <div className={`${myclass}`} style={{ transition: "all 1.5s" }}>
          <div className='art2' style={{ backgroundImage: `url(${about})`, backgroundPosition: "center" }}>
          </div>
          <h1>Morgan Arancibia</h1>
          <p><a className='anchor' href={'https://www.linkedin.com/in/morgan-arancibia/'} target='_blank'> <FaLinkedin/> LinkedIn </a></p>
          <p><a className='anchor' href={'https://github.com/mobrewer'} target='_blank'><FaGithub/> GitHub</a></p>
        </div>
      </div>
    </div>
  )
}
