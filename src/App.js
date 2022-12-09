import './App.css';
import NewBookmark from './Components/NewBookmark/NewBookmark';
import Discover from './Components/Discover/Discover';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';


function App() {

  const [bookmarks, setBookmarks] = useState()
  const [topMarks, setTopMarks] = useState()
  const options = {
    method: 'GET',
    url: 'https://dyna-mark.fly.dev/api/bookmark'
  }
  async function getBookmarks() {
    let results = await axios.request(options);
    console.log(results.data)
    setBookmarks(results.data)

    let arr = results.data
   arr.sort((a, b) => {
     return b.likes - a.likes
   })
  
   setTopMarks(arr.splice(0, 5))
    console.log(topMarks)

  }
  useEffect(() => {
    getBookmarks();
  }, [])

  return (
    <div className="App">
      <Nav/>
      
      <main>
        <Routes>
          <Route path='/' element={<Home topMarks={topMarks} />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/newbookmark' element={<NewBookmark />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
