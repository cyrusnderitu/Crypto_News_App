import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home_Page';
import Trend from './Pages/Trending/Trend_Page'
import Blog from './Pages/Blogs/Blog_page'
import About from './Pages/About/About_Page';

function App() {
  return (
    <div className="App flex w-full h-screen">
    <BrowserRouter >
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/trend' element={<Trend />}/>
            <Route path='/blogs' element={<Blog />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
