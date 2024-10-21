import Home from './components/Home/Home.tsx';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import Contacts from './components/Contacts/Contacts.tsx';

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}></Route>
          <Route path="/Contacts" element={<Contacts/>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
