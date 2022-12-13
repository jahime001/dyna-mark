import './NewBookmark.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Modal from "react-modal";
import { FaInfoCircle } from "react-icons/fa"

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
  const [tags, setTags] = useState([])
  const [message, setMessage] = useState('')
  const [modalOpen, setModalOpen] = useState(false);

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
    } catch (err) { }
    setTitle('')
    setPreview('')
    setDescription('')
    setLink('')
    setTags('')


  }


  return (
    <div className='newbookmark'>
      <h2>Add your <span>favorite</span> resource here:</h2>
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
          onChange={(e) => setTags(e.target.value)}
        >
        </input>
        <button
          className='Add'
          onClick={handleTags}
        >Add</button>
        <br />
        <div></div>
        <button type='submit'>Create</button>
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
          <p><span2>Tags:</span2> <em><b>PLEASE USE TAGS FROM THE LIST BELOW(Copy and Paste)</b></em></p>
          <ul>
            <li>Css</li>
            <li>Generator</li>
            <li>Documentation</li>
            <li>MonogDB</li>
            <li>Firebase</li>
            <li>Front-End</li>
            <li>Back-End</li>
            <li>Express</li>
            <li>Api</li>
            <li>Practice</li>
            <li>Javscript</li>
            <li>Reads</li>
            <li>W3Schools</li>
            <li>Html</li>
            <li>React</li>
            <li>Code Editor</li>
          </ul>
        </div>

        <button onClick={() => setModalOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  )
}
