import './NewBookmark.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function NewBookmark() {
  const [title, setTitle] = useState('')
  const [preview, setPreview] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')
  const [tags, setTags] =useState([])
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  let newTags = []
  function handleTags(e) {
    e.preventDefault()

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(JSON.stringify({
      title: title,
      preview: preview,
      description: description,
      link: link,
      tags: tags
    }));

    try {
      const data = {
        title: title,
        preview: preview,
        description: description,
        link: link,
        tags: tags
      }
    const res = await axios.post('https://dyna-mark.fly.dev/api/bookmark/', data)
    .then(function (response) {
      console.log(response)
      console.log('Resource was created succesfully');
      setMessage('Resource was created succesfully')
    })
    .catch(function (error) {
      console.log(error);
      console.log('Some error occured')
      setMessage('Some error occured')
    });
    navigate(-1)
  } catch(err) {}
  setTitle('')
  setPreview('')
  setDescription('')
  setLink('')
  setTags('')
}

  return (
    <div>
      <h2>Add your favorite resource here:</h2>
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
        <input 
          className='Tag'
          type='tags'
          value={tags}
          placeholder='Enter tags'
          onChange={(e) => setTags(e.target.value)}
        >
        </input>
        <button 
        className='Add'
        onClick = {handleTags}
        >Add</button>
        <br />
        <div></div>
        <button type='submit'>Create</button>
        <div className='message'>{message ? <p>{message}</p> : null }</div>
      </form>
    </div>
  )
}
