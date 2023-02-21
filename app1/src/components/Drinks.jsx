import React from 'react'

const Drink = ({drinks}) => {
    return ( 


        <div className='row'>
                
                    
                    
                    
                    
                {drinks.map((item , index) => (
                   
                 
                   <div key={index} className="col">

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
     );
}
 
export default Drink;