import {React, Component, useState} from 'react'
import './Discover.css'

export default function Discover({bookmarks}) {

  //map out all references & tags from the api

  let tagList = ['Css', 'Generator', 'Documentation', 'MongoDB', 'Firebase', 'Front-End', 'Back-End', 'Express', 'Api', 'Practice', 'Javascript', 'Reads', 'W3Schools', 'HTML', 'React', 'Code Editor']
  
  //setting state for filtering
  const [sort, setSort] = useState()

  function filterMark(tag) {
    let tagSort = bookmarks.filter((bookmark) => bookmark.tags.includes(tag))
    setSort(tagSort)
  }
  console.log(sort)
  // references.filter(filterMark)

  return (
    <div>
        <div>{tagList.map(item => {
        return (
          <button className='tag-items' id={item} onClick={(e)=>{
            e.preventDefault()
            console.log(e.target.id)
            filterMark(e.target.id)}}>{item}</button>
      )
      })}</div>

        <div>{bookmarks.map(bL => {
          return (
            <div>
              <h1>{bL.title}</h1>
              <h2>{bL.preview}</h2>
            </div>
          )
        })}</div>

    </div>
  )
}
