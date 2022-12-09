import {React, Component, useState} from 'react'
import './Discover.css'

export default function Discover({bookmarks}) {

  //map out all references & tags from the api

  let tagList = ['Css', 'Generator', 'Documentation', 'MongoDB', 'Firebase', 'Front-End', 'Back-End', 'Express', 'Api', 'Practice', 'Javascript', 'Reads', 'W3Schools', 'HTML', 'React', 'Code Editor']
  

  //grab & filter the mapped references on-click

  // function filterMark() {

  // }

  // references.filter(filterMark)

  return (
    <div>
        <div>{tagList.map(item => {
        return (
          <div className='tag-items'>{item}</div>
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
