import './App.css';
import Discover from './Components/Discover/Discover';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
      <Home topMarks={topMarks} />

    </div>
  );
}

export default App;
