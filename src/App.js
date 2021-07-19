import './App.css';
import React, {useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {

  const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    };

  return (
    <Router>
         <SideBar isOpen={isOpen} toggle={toggle}/>
         <NavBar toggle={toggle}/>
        <ItemListContainer/>

        
    </Router>
  );
}

export default App;
