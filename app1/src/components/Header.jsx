import React, { useState } from 'react'


const Header = ({drinks, parametro}) => {

const [values , setValue] = useState("");

console.log(setValue)
parametro = data.id;

    return (   
           
      <>
            <nav className="nav justify-content-center" id= "nav">

                <a className="nav-link disable"></a>
             

            <form role={'search'} className='d-flex'>
            <input type="search" 
            className="barra" placeholder='Search for a cocktail' aria-label='Search'
            
            onChange={(e)=>setValue(e.target.value)}/>
            </form>


         

            </nav>
               <ul className='List'>
               {drinks.filter((datas) =>
               datas.strDrink.toLowerCase().includes(values)
               ).map((data)=> 
               ( 
               <li key={data.id} className="listItem"> {data.strDrink}</li>))}
   
               </ul>

       </>

    );
}
 
export default Header;