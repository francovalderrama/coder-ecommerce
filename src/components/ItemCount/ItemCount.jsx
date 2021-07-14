import React from 'react'
import {useState} from 'react'





export default function ItemCount() {

    const [contador, setContador] = useState(0);

    function sumaClick() {
         setContador(contador + 1 )
    }

    
    return (
        <>  
           <h1>{contador}</h1> 

            <button onClick={sumaClick}>Click</button>
              
        </>
    )
}
