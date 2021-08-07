
import React, {useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import Home from './components/Home/Home';
import './App.css';
import ItemDetail from './components/ItemListContainer/ItemDetail';
import Categories from './components/Categories/Categories';
import CartContext from './Context/CartContext';
import Cart from './components/Cart/Cart';




function App() {



  const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    };


   
   
  return (
    <CartContext>
      <Router>
        
          <SideBar isOpen={isOpen} toggle={toggle}/>
          <NavBar toggle={toggle}/>
          <div className="page">
          <Route exact path="/" component={Home}/>
                  
            <Route exact path="/categorias/:categoriaId">
              <Categories/>
            </Route>
            <Route exact path="/productos/:productoNombre" component={ItemDetail}/>

            <Route exact path="/cart">
              <Cart></Cart>
            </Route>
            </div>
      </Router>
    </CartContext>
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