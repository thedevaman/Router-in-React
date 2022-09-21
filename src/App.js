import './App.css';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import Page404 from './component/Page404';
import User from './component/User';

import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/user/:name" element={<User/>}/>
      <Route path="/*" element={<Page404/>}/>
      </Routes>
       
      </BrowserRouter>
     
    </div>
  );
}

export default App;
