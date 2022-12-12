import './App.css';
import NewBookmark from './Components/NewBookmark/NewBookmark';
import Discover from './Components/Discover/Discover';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Info from './Components/Info/Info';
import Bookmark from './Components/Bookmark/Bookmark';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';


function App() {
 const [bookmarks, setBookmarks] = useState()
 const options = {
    method: 'GET',
    url: 'https://dyna-mark.fly.dev/api/bookmark'
  }
  async function getBookmarks() {
    let results = await axios.request(options);
    console.log(results.data)
    setBookmarks(results.data)
  }

  useEffect(() => {
    getBookmarks();
  }, [])
  console.log('this is app.js')

  return (
    <div>
      <Nav/>
  
      <main>
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/discover' element={<Discover bookmarks={bookmarks}/>} />
          <Route path='/discover/:id' element={<Bookmark />} />
          <Route path='/newbookmark' element={<NewBookmark />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
