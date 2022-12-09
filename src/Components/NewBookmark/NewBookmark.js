import { useState } from 'react'
import axios from 'axios'
import { set } from 'mongoose'
import { useNavigate } from 'react-router-dom'

export default function NewBookmark() {
  const [title, setTitle] = useState('')
  const [preview, setPreview] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')
  const [likes, setLikes] = useState(1)
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
        preview: preview,
        description: description,
        link: link,
        likes: likes,
        dislikes: dislikes,
      }
      console.log(data);
      const response = await axios.post('https://dyna-mark.fly.dev/api/bookmark/', data)
      console.log(response.data);
      navigate(-1)
    } catch(err) {
      console.log(err);
    }
  }


  // let handleSubmit = async(e) => {
  //   e.preventDefault()
  //   try {
  //     let res = await fetch('https://dyna-mark.fly.dev/api/bookmark/', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         title: title,
  //         preview: preview,
  //         description: description,
  //         link: link,
  //         likes: likes,
  //         dislikes: dislikes,
  //       })
  //     })
  //     let resJson = await res.json()
  //     if (res.status === 200) {
  //       setTitle('')
  //       setPreview('')
  //       setDescription('')
  //       setLink('')
  //       setLikes(1)
  //       setDislikes(1)
  //       setMessage('New resource was created successfully!')
  //     } else {
  //       setMessage('Some error occured')
  //     }
  //   } catch(err) {
  //     console.log(err);
  //   }
  // }


  return (
    <div className='Bookmark'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={title}
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type='preview'
          value={preview}
          placeholder='Enter a preview of the website'
          onChange={(e) => setPreview(e.target.value)}
        />
        <br />
        <input
          type='description'
          value={description}
          placeholder='Enter description of the website'
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          type='link'
          value={link}
          placeholder='Enter website link'
          onChange={(e) => setLink(e.target.value)}
        />
        <br />
        <button type='submit'>Create</button>
        <div className='message'>{message ? <p>{message}</p> : null }</div>
      </form>
    </div>
  )
}
