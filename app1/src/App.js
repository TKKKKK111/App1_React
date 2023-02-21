
import './App.css';
import Header from './components/Header';
import React, {useState,useEffect} from 'react'

import Drink from './components/Drinks';


function App() {
  const url1 = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

  const fetchRopa = (url)=> {
      fetch(url).then(res => res.json())
      .then(data => setDrink(data.drinks))
      .catch(error => console.error(error));  
  }
  
  const [ drink, setDrink ] = useState([]);
console.log(drink);
  
      useEffect(()=> {
          
  fetchRopa(url1);
  
      },[])
  
      return ( 
      
      <>
  
        <Header/>
     <div className='container'>
   

     <Drink drinks={drink}/></div>
      
    
     </>
      
  );
  }


export default App;
