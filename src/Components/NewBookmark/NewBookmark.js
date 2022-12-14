import './NewBookmark.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Modal from "react-modal";
import { FaInfoCircle } from "react-icons/fa"
import bookmark from '../../assets/Bookmark.png'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 400,
    height: 200
  },
};


export default function NewBookmark() {
  const [title, setTitle] = useState('')
  const [preview, setPreview] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')
  const [tags, setTags] = useState()
  const [message, setMessage] = useState('')
  const [modalOpen, setModalOpen] = useState(false);
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = {
        title: title,
        preview: preview,
        description: description,
        link: link,
        tags: tags.split(','),
        likes: likes,
        dislikes: dislikes
      }
      const res = await axios.post('https://dyna-mark.fly.dev/api/bookmark/', data)
        .then(function (response) {
          setMessage('Resource was created succesfully')
        })
        .catch(function (error) {
          setMessage('Some error occured')
        });
      navigate(-1)
    } catch (err) { }
    setTitle('')
    setPreview('')
    setDescription('')
    setLink('')
    setTags('')


  }


  return (
    <div className='bookmark-container'>
      <div className='newbookmark-upper'>
        <div>
          <img src={bookmark} />
        </div>
        <div>
          <h1 className='create'> Create a <span className='create-message'>bookmark</span>  of your <span className='create-message'>favorite</span> resource below!
        
        </h1>
        </div>
        
      </div>
      <div className='newbookmark-lower'>
        <p>
          Before submitting, please follow intructions found when "Help" button is clicked down below
        </p>
      <form onSubmit={handleSubmit}>
        <input
          className="text-field"
          type='text'
          value={title}
          placeholder='Enter the title of the website'
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <input
          className="text-field"
          type='preview'
          value={preview}
          placeholder='Enter a preview of the website'
          onChange={(e) => setPreview(e.target.value)}

        />

        <br />
        <input
         className="text-field"
          type='description'
          value={description}
          placeholder='Enter description of the website'
          onChange={(e) => setDescription(e.target.value)}
        />


        <br />
        <input
          className="text-field"
          type='link'
          value={link}
          placeholder='Enter website link'
          onChange={(e) => setLink(e.target.value)}
        />
        <br />
        <input
          className='Tag text-field' 
          type='tags'
          value={tags}
          placeholder='Enter tags'
          onChange={(e) => setTags(e.target.value.toLowerCase())}
        >
        </input>
        <br />
        <div></div>
        <button className='submit' type='submit'>Create</button>
        <div className='message'>{message ? <p>{message}</p> : null}</div>
      </form>
      <br />
      <button className='help' onClick={setModalOpen}>Help <FaInfoCircle /></button>
      <Modal

        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
        <div>
          <h3>How to create your <span>bookmark</span></h3>
          <p><span2>Title:</span2> <em>Title of resource or webpage.</em></p>
          <p><span2>Preview:</span2> <em>This will be displayed on the bookmark card, it should be short description of the webpage</em></p>
          <p><span2>Description:</span2> <em>What the webpage or resource is about(can be found in the about page if the website)</em></p>
          <p><span2>Link:</span2> <em>Copy and paste links here</em></p>
          <p><span2>Tags:</span2> <em><b>PLEASE USE TAGS FROM THE LIST BELOW(Copy and Paste). Seperate tags using a comma!</b></em></p>
          <ul>
            <li>css</li>
            <li>generator</li>
            <li>documentation</li>
            <li>monogdb</li>
            <li>firebase</li>
            <li>frontend</li>
            <li>backend</li>
            <li>express</li>
            <li>api</li>
            <li>practice</li>
            <li>javscript</li>
            <li>reads</li>
            <li>w3schools</li>
            <li>html</li>
            <li>react</li>
            <li>codeeditor</li>
          </ul>
        </div>

        <button onClick={() => setModalOpen(false)}>Close Modal</button>
      </Modal>
    </div>
    </div>
  )
}
