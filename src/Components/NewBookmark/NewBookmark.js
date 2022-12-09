import React, { useState } from 'react'
import axios from 'axios'


export default function newBookmark() {
  const [title, setTitle] = useState('')
  const [preview, setPreview] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')
  const [likes, serLikes] = useState(1)
  const [dislikes, setDislikes] = useState(1)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(JSON.stringify({
      title: title,
      preview: preview,
      description: description,
      link: link,
      likes: likes,
      dislikes: dislikes,
    }));

    try {
      const data = {
        title: title,
        
      }
    }
  }


  return (
    <div>newBookmark</div>
  )
}
