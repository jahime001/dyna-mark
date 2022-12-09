import {React, Component, useState} from 'react'
import './Discover.css'

export default function Discover({bookmarks}) {

  //map out all references & tags from the api

  let tagList = ['Css', 'Generator', 'Documentation', 'MongoDB', 'Firebase', 'Front-End', 'Back-End', 'Express', 'Api', 'Practice', 'Javascript', 'Reads', 'W3Schools', 'HTML', 'React', 'Code Editor']
  
  // let bookMarkList  = bookmarks.map(bL => {
  //   return (bL)
  // })

  //grab & filter the mapped references on-click

  // function filterMark() {

  // }

  // references.filter(filterMark)

  return (
    <div>
      {tagList.map(item => {
      return (
        <div className='tag-items'>{item}</div>
      )
      })}
    </div>
  )
}
