import React, { useEffect, useState } from 'react'
import './Bookmark.css'
import { useParams } from 'react-router'
import axios from 'axios'
import { FiThumbsUp } from 'react-icons/fi';
import { FiThumbsDown } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { RiExternalLinkFill } from 'react-icons/ri';

export default function Bookmark() {
  let {id} = useParams()
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
      <div className='bookmark'>
        <div className='booke'>
          <MdDelete />
          <h1>{booke.title}</h1>
          <h1>{booke.description}</h1>
          <a href={booke.link} target='blank'><div className='booke-link'>Visit   <RiExternalLinkFill/></div></a>
          <FiThumbsUp onClick={handleLike} changed={changed} />
          <h1>{booke.likes}</h1>
          <FiThumbsDown onClick={handleDislike} />
          <h1>{booke.dislikes}</h1>

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
