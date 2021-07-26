
import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import Home from './components/Home/Home';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemListContainer/ItemDetail';



function App() {

  const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    };


   
   
  return (
    <Router>
         <SideBar isOpen={isOpen} toggle={toggle}/>
         <NavBar toggle={toggle}/>

         <Route exact path="/" component={Home}/>
                
          <Route exact path="/categorias/:categoriaId" component={ItemListContainer}/>
          <Route exact path="/productos/:productoNombre" component={ItemDetail}/>

    </Router>
  );
}

export default App;


 //Probando apis 
  
  //   const [poKelist,setPokeList] = useState([])
    
  //   useEffect(() => {
  //     fetch('https://pokeapi.co/api/v2/pokemon/')
  //     .then(data=> data.json())
  //     .then(res => setPokeList(res.results))
  // }, [])

  // console.log(poKelist)