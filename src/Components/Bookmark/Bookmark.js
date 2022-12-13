import React, { useEffect, useState } from 'react'
import './Bookmark.css'
import { useParams, useNavigate } from 'react-router'
import axios from 'axios'
import { FiThumbsUp } from 'react-icons/fi';
import { FiThumbsDown } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { RiExternalLinkFill } from 'react-icons/ri';
import { BsFillXCircleFill } from 'react-icons/bs';
import { BsFillCircleFill } from 'react-icons/bs';
import about from '../../assets/About.png'
import abs from '../../assets/abs3.png'

export default function Bookmark() {
  let {id} = useParams()
   const navigate = useNavigate()
const [booke, setBooke] = useState([])
  const [loading, setLoading] = useState(false)
  const [changed, setChanged] = useState(0)

  const options2 = {
    method: 'GET',
    url: `https://dyna-mark.fly.dev/api/bookmark/${id}`
  }
  
 async function chosenBookmark(){
   let results = await axios.request(options2)
   setBooke(results.data)
   console.log(results)
  }
  useEffect(() =>{
    chosenBookmark()
  }, [loading, changed])

  function handleLike(){
    const data = {
      ...booke,
      likes: booke.likes + 1
    }
    axios.put(`https://dyna-mark.fly.dev/api/bookmark/${id}`, data, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  
    // setBooke(data)
    chosenBookmark()
    setChanged(data.likes)
    console.log(booke)
  }
  function handleDislike() {
    const data = {
      ...booke,
      dislikes: booke.dislikes + 1
    }
    axios.put(`https://dyna-mark.fly.dev/api/bookmark/${id}`, data, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    // setBooke(data)
    chosenBookmark()
    setChanged(data.dislikes)
    console.log(booke)
  }


 

  if (booke){
    return (
      <div className='bookmark' style={{backgroundImage: `url(${abs})`, backgroundPosition: "center" }}>
        <div className='booke-container'>
          <div className='booke-img' style={{ backgroundImage: `url(${about})`, backgroundPosition: "center" }}>
            <div className='booke-nav'>
              <BsFillXCircleFill style={{color: "red"}} onClick={() => navigate(-1)}/>
              <BsFillCircleFill  style={{color: "yellow"}}/>
              <BsFillCircleFill  style={{color: "00e000"}}/>
            </div>
          </div>
          <div className='booke'>
          <h1 className='booke-title'>{booke.title}</h1>
          <h1>{booke.description}</h1>
          <a href={booke.link} target='blank'><div className='booke-link'>Visit   <RiExternalLinkFill/></div></a>
              <div className='react'>
            <div className='like'>
              <FiThumbsUp onClick={handleLike} changed={changed} className='thumb' />
              <h1>{booke.likes}</h1>
            </div>
            <div className='dislike'>
              <FiThumbsDown onClick={handleDislike} className='thumb' />
              <h1>{booke.dislikes}</h1>
            </div>
          </div>
          </div>
          
          
          

        </div>
      </div>
    )
  } else{
    setLoading(true)
    return (
      <div className='bookmark'>

      </div>
    )
  }
  
}
