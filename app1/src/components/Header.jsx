import React from 'react'

const Header = () => {
    return (   
           
      
            <nav className="nav justify-content-center" id= "nav">

                <a className="nav-link disable"></a>
             

            <form role={'search'} className='d-flex'>
            <input type="search" className="barra" placeholder='Search for a cocktail' aria-label='Search'/>

            </form>

            </nav>

       

    );
}
 
export default Header;