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
    

   


        <div className='row row-cols-auto'>
                
                    
                    
                    
                    
        {drinks.filter((item) =>
           item.strDrink.toLowerCase().includes(values)
           ).map((item,index)=> 
           ( 
            
      
                   
                 
                   <div key={index} className="col col-auto">

                        <div className='card' id='card 'style={{maxWidth: "200px", borderRadius:"15px", boxShadow:"15 15 15 15 black", rowGap:""}}> 
                        <img src={item.strDrinkThumb} alt="" /> 


                                       
                            <div className='card-title'> <b>{item.strDrink}</b></div>
                            <div className='card-body'>

                                <h8> {item.idDrink}</h8>
                                <h3>{item.strCategory}</h3>

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