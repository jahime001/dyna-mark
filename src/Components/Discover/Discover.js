import { React, Component, useState, useEffect } from 'react'
import './Discover.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoIosBookmark } from "react-icons/io";
import { BiTrendingUp } from "react-icons/bi";
import { AiFillPlusCircle } from "react-icons/ai";
import scope from '../../assets/scope.png'
import open from '../../assets/open.png'
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
  const [data, setData] = useState([])

  function handleData(){
    if (bookmarks) {
      setData([bookmarks])
      setSort(bookmarks)
    }
  }

  console.log(data)

useEffect(() => {
  handleData()
}, [bookmarks])

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
 
    ////color
let colors = {
  css: "#0000ff",
generator: "#998714",
documentation: "#ff0000",
mongodb: "#589636",
firebase: "#F5820D",
frontend: "#ab7441",
backend: "#1b716f",
express: "#a9b2af",
api: "#4e00af",
practice: "#00476c",
javascript: "#ffff00",
reads: "#006c6f",
w3Schools: "#3cb371",
html: "#e34c26",
react: "#61dbfb",
codeeditor: "#870855"
}


    /////
 ////////////bookmarkdata
 
 
 if(bookmarks === undefined){
   return <div><h1>loading...</h1></div>
   
 }else{
   if (sort) {
     return (
       <div className='discover-container'>
        <div className='find'>
           {/* <img src={open} alt="" className='open' /> */}
           <select name='tags' className='dropdown' onChange={(e) => {
             e.preventDefault()
             filterMark(e.target.value)
           }}>
            <option value='All'>All</option>
            {dropdown}
            </select>
 <input
             className='search'
             type='text'
             placeholder='Type to search...'
             value={text}
             onChange={e => searchChange(e.target.value)}
           />
           <img src={scope} alt="" className='scope'/>
           </div>
         <p>You are currently searching in the <em><b>{currentSearch}</b></em> catagory</p>
         
         <div className='results'>
           {sort.map(item => {
          let bands = item.tags.map(z => {
           return <IoIosBookmark style={{color: `${colors[z]}`}}/>
           })
           
            let total = item.likes + item.dislikes
            let per = Math.floor(100 * item.likes / total)
            let NaN = 0
            console.log(per)
             return (
               <Link to={"/discover/" + item._id}>
                 <div className='results-item' key={item.id} >
                  <div className='results-item-left'>{bands}</div>
                  <div className='results-item-right'>
                  <div className='upper'>
                     <p> <BiTrendingUp/> {per} %</p>
                     <h1>{item.title}</h1>
                  </div>
                   <h3>{item.preview}</h3>
                   </div>
                 </div>
               </Link>
             )
           })}
         </div>
         <Link to={"/newbookmark"}><AiFillPlusCircle className='float-create'/></Link>
         {data.length === 0 && <span>Nothing found matching '{text}'</span>}
       </div>

     )
   } else {
     return (
       <div className='discover-container'>
         <div className='find'>
           <h1>Search:</h1> <input
             className='search'
             type='text'
             placeholder='Type to search...'
             value={text}
             onChange={e => searchChange(e.target.value)}
           />
           <select name='tags' className='dropdown' onChange={(e) => {
             e.preventDefault()

             filterMark(e.target.value)
           }}> <option value='All'>All</option>{dropdown}</select>
         </div>

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
   }
 }
 
  
}
