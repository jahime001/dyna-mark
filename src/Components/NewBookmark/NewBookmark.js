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




  return (
    <div>newBookmark</div>
  )
}
