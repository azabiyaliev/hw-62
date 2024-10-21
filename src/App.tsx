import Home from './components/Home/Home.tsx';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import Contacts from './components/Contacts/Contacts.tsx';
import Works from './containers/Works/Works.tsx';
import CountriesTask from './containers/CountriesTask/CountriesTask.tsx';
import Chat from './containers/Chat/Chat.tsx';

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}></Route>
          <Route path="/Contacts" element={<Contacts/>}></Route>
          <Route path="/Works" element={<Works/>}></Route>
          <Route path="/CountriesTask" element={<CountriesTask/>}></Route>
          <Route path="/Chat" element={<Chat/>}></Route>
          <Route path="*" element={<h1 className="mt-5">Not found</h1>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
