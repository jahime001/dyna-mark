import React from 'react'
import './About.css'
import about from '../../assets/About.png'
import follow from '../../assets/Follow.png'
import about2 from '../../assets/About2.png'
import box1 from '../../assets/Box1.png'
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
    <div className='about-container'>
      <div>
        <div className='about'>
          <div style={{ backgroundImage: `url(${about})`, backgroundPosition: "center" }}>
          </div>

          <h1>About the creators of <span> Dyna-Mark</span></h1>
          <h2>We are students at General Assembly, that were given the task to create a full stack application. Going through several ideas we decided to go with one idea we thought would be the most beneficial to new students! Big shoutout to our TA's for helping us with this Dynamic Bookmark idea.
            <br />
            We hope that this benefits those on their journey to become a Software Engineer, because we know how hard it can be but with the proper resources and determination <span>YOU CAN DO IT!</span>
          </h2>

        </div>
      </div>
      <br />
      <div className='follow'>
        <img src={follow}/>
      </div>
      <div className='boxes2'>

        <div className={`${myclass}`} style={{ transition: "all 1.5s" }}>
          <div className='art2' style={{ backgroundImage: `url(${box1})`, backgroundPosition: "center" }}>
          </div>
          <h1 className='heading'>Bibhor Gurung</h1>
          <p><a className='anchor' href={'https://github.com/Bibhor2000'} target='_blank'><FaGithub/> GitHub</a></p>
          <p><a className='anchor' href={'https://www.linkedin.com/in/bibhor2000/'} target='_blank'> <FaLinkedin/> LinkedIn </a></p>
        </div>
        <br />
        <div className={`${myclass}`} style={{ transition: "all 1.5s" }}>
          <div className='art2' style={{ backgroundImage: `url(${about2})`, backgroundPosition: "center" }}>
          </div>
          <h1 className='heading'>Jahime Cameau</h1>
          <p><a className='anchor' href={'https://github.com/jahime001'} target='_blank'><FaGithub/> GitHub</a></p>
          <p><a className='anchor' href={'https://www.linkedin.com/in/jahimecameau/'} target='_blank'> <FaLinkedin/> LinkedIn </a></p>
        </div>
        <br />
        <div className={`${myclass}`} style={{ transition: "all 1.5s" }}>
          <div className='art2' style={{ backgroundImage: `url(${about})`, backgroundPosition: "center" }}>
          </div>
          <h1 className='heading'>Morgan Arancibia</h1>
          <p><a className='anchor' href={'https://github.com/mobrewer'} target='_blank'><FaGithub/> GitHub</a></p>
          <p><a className='anchor' href={'https://www.linkedin.com/in/morgan-arancibia/'} target='_blank'> <FaLinkedin/> LinkedIn </a></p>
        </div>
      </div>
    </div>
  )
}
