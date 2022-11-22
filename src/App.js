import './App.css'
import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home_Page';
import Trend from './Pages/Trending/Trend_Page'
import Blog from './Pages/Blogs/Blog_page'
import About from './Pages/About/About_Page';
import cryptoNews from './api/Api';

function App() {

  const [trend, setTrend] = useState()

  useEffect(()=>{
    const getLocalNews = localStorage.getItem('trndNews')
    if(getLocalNews){
      setTrend(JSON.parse(getLocalNews));
    }
    else{
      cryptoNews()
      .then((data)=>{
        localStorage.setItem('trndNews', JSON.stringify(data[0].screen_data.news))
        setTrend(data[0].screen_data.news);
      })
    }
  },[])

console.log(trend);

  return (
    <div className="App flex w-full h-screen">
    <BrowserRouter >
          <Routes>
            <Route path='/' element={<Home trend={trend} />}/>
            <Route path='/trend' element={<Trend />}/>
            <Route path='/blogs' element={<Blog />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
