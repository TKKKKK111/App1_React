import React, { useState } from 'react'
;
import PropTypes from 'prop-types';

import './Drinks.css';






const Drink = ({drinks}) => {


    const [values,setValue] = useState("");

   
    return ( 

        <> 
        <nav className="nav justify-content-center w-auto h-auto d-flex" id= "nav">

        <div className='navbar-toggler-icon'></div>
         

        <form role={'search'} className='d-flex'>
        <input type="search" 
        className="barra" placeholder='Search for a cocktail' aria-label='Search'
        
        onChange={(e)=>setValue(e.target.value.toLowerCase())}/>
        </form>


     

        </nav>
    
    




        <div className='row' id='container-fluid'>
                
                    
                    
                    
                    
        {drinks.filter((item) =>
           item.strDrink.toLowerCase().includes(values)
           ).map((item,index)=> 
           ( 
            
      
                   
                 
                   <div key={index} className="col-md-3">

                        <div className='card' id='card 'style={{ maxWidth:"230px",maxHeight:"500px",borderRadius:"15px", boxShadow:"15 15 15 15 black"}}> 
                        <img src={item.strDrinkThumb} alt="" /> 


                                       
                           
                            <div className='card-title'>   <h4>{item.strDrink}</h4><h5><b>
                                {item.strCategory}
                            </b></h5></div>
                            <div className='card-body' >
                                    <ul style={{listStyle:"none"}}>
                                            <p>Ingredients</p>
                                       
                                        <li>
                                            {item.strIngredient1}
                                        </li>
                                        <li>
                                        {item.strIngredient2}
                                        </li>
                                        <li>
                                        {item.strIngredient3}
                                        </li>
                                        <li>
                                        {item.strIngredient4}
                                        </li>
                                    </ul>
                             <button type='button' className='btn btn-success'> Preparación!</button>
                            
                              

                            
                        



                            </div>
                            

                        </div>

                    </div>
                   )
                )}
                    
                    

        </div>

        </>
     );
}
 
export default Drink;

Drink.propTypes={
  
    drinks: PropTypes.array.isRequired
};