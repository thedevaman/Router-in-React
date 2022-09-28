import './App.css';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import Page404 from './component/Page404';
import User from './component/User';
import Filter from './component/Filter';

import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Contact from './component/Contact';
import Company from './component/Company';
import Channel from './component/Channel';
import Other from './component/Other';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/user/:name" element={<User/>}/>
      <Route path="/filter" element={<Filter/>}/>
      <Route path="/*" element={<Page404/>}/>
      <Route path="/contact/" element={<Contact/>}>
        <Route path="company" element={<Company/>}></Route>
        <Route path="channel" element={<Channel/>}></Route>
        <Route path="other" element={<Other/>}></Route>
      </Route>
      </Routes>
       
      </BrowserRouter>
     
    </div>
  );
}

export default App;
