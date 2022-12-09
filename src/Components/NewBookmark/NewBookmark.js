import React, { useState } from 'react'
import axios from 'axios'
import { set } from 'mongoose'


export default function newBookmark() {
  const [title, setTitle] = useState('')
  const [preview, setPreview] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')
  const [likes, setLikes] = useState(1)
  const [dislikes, setDislikes] = useState(1)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   console.log(JSON.stringify({
  //     title: title,
  //     preview: preview,
  //     description: description,
  //     link: link,
  //     likes: likes,
  //     dislikes: dislikes,
  //   }));

  //   try {
  //     const data = {
  //       title: title,
  //       preview: preview,
  //       description: description,
  //       link: link,
  //       likes: likes,
  //       dislikes: dislikes,
  //     }
  //     console.log(data);
  //     const response = await axios.post('https://dyna-mark.fly.dev/api/bookmark/', data)
  //     console.log(response.data);
  //     navigate(-1)
  //   } catch(err) {
  //     next(err)
  //   }
  // }


  let handleSubmit = async(e) => {
    e.preventDefault()
    try {
      let res = await fetch('https://dyna-mark.fly.dev/api/bookmark/', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          preview: preview,
          description: description,
          link: link,
          likes: likes,
          dislikes: dislikes,
        })
      })
      let resJson = await res.json()
      if (res.status === 200) {
        setTitle('')
        setPreview('')
        setDescription('')
        setLink('')
        setLikes(1)
        setDislikes(1)
        setMessage('New resource was created successfully!')
      } else {
        setMessage('Some error occured')
      }
    } catch(err) {
      next(err)
    }
  }


  return (
    <div>newBookmark</div>
  )
}
