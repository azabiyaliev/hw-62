import Home from './components/Home/Home.tsx';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs.tsx';
import Navbar from './components/Navbar/Navbar.tsx';

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
