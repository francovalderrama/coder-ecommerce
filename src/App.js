import './App.css';
import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {

  const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    };

    //Probando apis 
  
  //   const [poKelist,setPokeList] = useState([])
    
  //   useEffect(() => {
  //     fetch('https://pokeapi.co/api/v2/pokemon/')
  //     .then(data=> data.json())
  //     .then(res => setPokeList(res.results))
  // }, [])

  // console.log(poKelist)
  return (
    <Router>
         <SideBar isOpen={isOpen} toggle={toggle}/>
         <NavBar toggle={toggle}/>
        <ItemListContainer title={"Nuestros productos"}/>

        
    </Router>
  );
}

export default App;
