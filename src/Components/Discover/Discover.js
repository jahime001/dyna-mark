import { React, Component, useState } from 'react'
import './Discover.css'
import Modal from "react-modal";
import { FiThumbsUp } from 'react-icons/fi';
import { FiThumbsDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 1000,
    height: 500
  },
};
export default function Discover({ bookmarks }) {
const [modalOpen, setModalOpen] = useState(false);
const [modalInfo, setModalInfo] = useState(
  {
    title: ' ',
    preview: ' ',
    description: ' ',
    link: ' ',
    likes: ' ',
    dislikes: ' ',
    tags: ' '
  }
);
  //map out all references & tags from the api

  let tagList = ['Css', 'Generator', 'Documentation', 'MongoDB', 'Firebase', 'Front-End', 'Back-End', 'Express', 'Api', 'Practice', 'Javascript', 'Reads', 'W3Schools', 'HTML', 'React', 'Code Editor']

  //setting state for filtering
  const [sort, setSort] = useState()
  const [currentSearch, setCurrentSearch] = useState()
  

  //search bar
  const[text, setText] = useState('')
  const [data, setData] = useState(bookmarks)
  const searchChange = value => {
    setText(value)
    filterData(value)
  }
  const filterData = value => {
    const lowerCaseValue = value.toLowerCase().trim()
    if (!lowerCaseValue) {
      setData(bookmarks)
      setSort(bookmarks)
    }else{
      if(sort){
        const filteredData = sort.filter(item => {
          return Object.keys(item).some(key => {
            return item[key].toString().toLowerCase().includes(lowerCaseValue)
          })
        })
        setSort(filteredData)
      }else{
        const filteredData = bookmarks.filter(item => {
          return Object.keys(item).some(key => {
            return item[key].toString().toLowerCase().includes(lowerCaseValue)
          })
        })
        setData(filteredData)
      }
      
    }
  }

  ///

  function filterMark(tag) {
    if(tag === 'All'){
      setSort(bookmarks)
      setCurrentSearch(tag)
    }else{
      let tagSort = bookmarks.filter((bookmark) => {
        // console.log(bookmark.tags.includes(tag))
        return bookmark.tags.includes(tag)
      })
      // console.log(tagSort)
      setSort(tagSort)
      setCurrentSearch(tag)
    }
  
  }
  // console.log(sort)
  // references.filter(filterMark)
 
    let dropdown = tagList.map(item => {
      return (
        <option value={item} id={item}>{item}</option>
      )
    })
 
 ////////////bookmarkdata

 function handleBookmark(value){
  setModalOpen(true)
 let result = bookmarks.find(x => x._id == `${value}`)
 setModalInfo(result)
 }
 
 
 
  if (sort) {
    return (
      <div className='discover-container'>
        Search: <input
          className='dropdown'
          type='text'
          placeholder='Type to search...'
          value={text}
          onChange={e => searchChange(e.target.value)}
        />
        <p>You are currently searching in the <em><b>{currentSearch}</b></em> catagory</p>
        <select name='tags' className='dropdown' onChange={(e) => {
          e.preventDefault()

          filterMark(e.target.value)
        }}><option value='All'>All</option>{dropdown}</select>


        <div>
          {sort.map(item => {
            return (
              <div className='results' key={item.id} onClick={setModalOpen}>
                <h1>{item.title}</h1>
                <h2>{item.preview}</h2>
              </div>
            )
          })}
        </div>
        {data.length === 0 && <span>Nothing found matching '{text}'</span>}
      </div>

    )
  }
  return (
    <div className='discover-container'>
      Search: <input 
      className='dropdown'
      type='text'
      placeholder='Type to search...'
      value={text}
      onChange={e => searchChange(e.target.value)}
      />
    <select name='tags' className='dropdown' onChange={(e) =>{
        e.preventDefault()

        filterMark(e.target.value)
    }}> <option value='All'>All</option>{dropdown}</select>
      <div>{data.map(item => {
        return (
          <Link to={"/discover/" + item._id}>
          <div className='results' key={item._id} onClick={() => handleBookmark(item._id)}>
            <h1>{item.title}</h1>
            <h2>{item.preview}</h2>
          </div>
          </Link>
        )
      })}</div>
    {data.length === 0 && <span>Nothing found matching '{text}'</span>}
    
    </div>
  )
}
