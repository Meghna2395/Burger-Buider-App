import React from 'react';
import Hoc from '../../../hoc/hoc';



const OrderSummary = (props) => {
    
     const ingredientSummary = Object.keys(props.ingredients)
     .map(igKey => {
         return ( <li key={igKey} >
          <span style={{ textTransform:'capitalize' }} > {igKey}  </span> : {props.ingredients[igKey]}

         </li> )
     })




    return(
        <Hoc>
            <h3> Your Order </h3>
            <p> burger with following Ingredients </p>
            <ul>
                {ingredientSummary}
            </ul>
            
            
         </Hoc>
    )
}

export default OrderSummary