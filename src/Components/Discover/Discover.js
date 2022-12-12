import { React, Component, useState, useEffect } from 'react'
import './Discover.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Discover({bookmarks}) {
  console.log(bookmarks)
  // const [bookmarks, setBookmarks] = useState()
  const [loading, setLoading] = useState(false)
  // const options = {
  //   method: 'GET',
  //   url: 'https://dyna-mark.fly.dev/api/bookmark'
  // }
  // async function getBookmarks() {
  //   let results = await axios.request(options);
  //   console.log(results.data)
  //   setBookmarks(results.data)
  // }
  // useEffect(() => {
    
  // }, [loading])
 
  

 
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

 
 
 if(bookmarks){
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
               <Link to={"/discover/" + item._id}>
                 <div className='results' key={item.id} >
                   <h1>{item.title}</h1>
                   <h2>{item.preview}</h2>
                 </div>
               </Link>
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
       <select name='tags' className='dropdown' onChange={(e) => {
         e.preventDefault()

         filterMark(e.target.value)
       }}> <option value='All'>All</option>{dropdown}</select>
       <div>{data.map(item => {
         return (
           <Link to={"/discover/" + item._id}>
             <div className='results' key={item._id}>
               <h1>{item.title}</h1>
               <h2>{item.preview}</h2>
             </div>
           </Link>
         )
       })}</div>
       {data.length === 0 && <span>Nothing found matching '{text}'</span>}

     </div>
   )
 }else{
  setLoading(true)
  return <h1>loading...</h1>
 }
 
  
}
