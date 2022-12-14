import { React, Component, useState, useEffect } from 'react'
import './Discover.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoIosBookmark } from "react-icons/io";
import { BiTrendingUp } from "react-icons/bi";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import scope from '../../assets/scope.png'
import open from '../../assets/open.png'
import Modal from "react-modal";

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
    height: 200,

  },
};


export default function Discover({bookmarks}) {
const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false)

 
  



  let tagList = ['css', 'generator', 'documentation', 'mongoDB', 'firebase', 'frontend', 'backend', 'express', 'api', 'practice', 'javascript', 'Reads', 'W3Schools', 'html', 'react', 'codeeditor']


  const [sort, setSort] = useState()
  const [currentSearch, setCurrentSearch] = useState()
  



  const[text, setText] = useState('')
  const [data, setData] = useState([])

  function handleData(){
    if (bookmarks) {
      setData([bookmarks])
      setSort(bookmarks)
    }
  }

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



  function filterMark(tag) {
    if(tag === 'All'){
      setSort(bookmarks)
      setCurrentSearch(tag)
    }else{
      let tagSort = bookmarks.filter((bookmark) => {

        return bookmark.tags.includes(tag)
      })
   
      setSort(tagSort)
      setCurrentSearch(tag)
    }
  
  }
 
 
    let dropdown = tagList.map(item => {
      return (
        <option value={item} id={item}>{item}</option>
      )
    })
 

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

 
 
 if(bookmarks === undefined){
   return <div><h1>loading...</h1></div>
   
 }else{
   if (sort) {
     return (
       <div className='discover-container'>
        <div className='find'>
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
        <BsInfoCircleFill className='float-create2' onClick={setModalOpen}/>
        <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
       <div className='legend'>
        <h1>Keys</h1>
        <h2>Css <IoIosBookmark style={{color: '#0000ff'}}/></h2>
        <h2>Generator <IoIosBookmark style={{color: '#998714'}}/></h2>
        <h2>Documentation <IoIosBookmark style={{color: '#ff0000'}}/></h2>
        <h2>MongoDB<IoIosBookmark style={{color: '#589636'}}/></h2>
        <h2>Firebase <IoIosBookmark style={{color: '#F5820D'}}/></h2>
        <h2>Front End <IoIosBookmark style={{color: '#ab7441'}}/></h2>
        <h2>Back End <IoIosBookmark style={{color: '#1b716f'}}/></h2>
        <h2>express <IoIosBookmark style={{color: '#a9b2a'}}/></h2>
        <h2>Api <IoIosBookmark style={{color: '#4e00af'}}/></h2>
        <h2>Practice <IoIosBookmark style={{color: '#00476c'}}/></h2>
        <h2>Javascript <IoIosBookmark style={{color: '#ffff00'}}/></h2>
        <h2>Reads <IoIosBookmark style={{color: '#006c6f'}}/></h2>
        <h2>W3Schools <IoIosBookmark style={{color: '#3cb371'}}/></h2>
        <h2>Html <IoIosBookmark style={{color: '#e34c26'}}/></h2>
        <h2>React <IoIosBookmark style={{color: '#61dbfb'}}/></h2>
        <h2>CodeEditor <IoIosBookmark style={{color: '#870855'}}/></h2>
       </div>
      </Modal>
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
