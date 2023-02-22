import React, { useState } from 'react'

const Drink = ({drinks}) => {

    const [values,setValue] = useState("");
    return ( 

        <>
        <nav className="nav justify-content-center" id= "nav">

            <a className="nav-link disable"></a>
         

        <form role={'search'} className='d-flex'>
        <input type="search" 
        className="barra" placeholder='Search for a cocktail' aria-label='Search'
        
        onChange={(e)=>setValue(e.target.value.toLowerCase())}/>
        </form>


     

        </nav>
    

   


        <div className='row'>
                
                    
                    
                    
                    
        {drinks.filter((item) =>
           item.strDrink.toLowerCase().includes(values)
           ).map((item)=> 
           ( 
      
                   
                 
                   <div key={item.id} className="col">

                        <div className='card' id='card 'style={{maxWidth: "200px", borderRadius:"15px", boxShadow:"15 15 15 15 black", rowGap:""}}> 
                        <img src={item.strDrinkThumb} alt="" /> 
                        
                            <div className='card-body'>
                                <h5> {item.strDrink}</h5>
                            
                        



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