import React from 'react';
import classes from './buildControls.module.css'
import BuildControl from './buildControl/buildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Potato Cake', type: 'potatocake' },
    { label: 'Cheese', type: 'cheese' },

]



const BuildControls = (props) => (
    <>
    <div style={{marginTop:'40px'}} ></div>
    <div className={classes.BuildControls} >
        <h4> Current Price : <strong> {props.price}  </strong> </h4>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={()=> props.ingredientAdded(ctrl.type) }
                removed={()=> props.ingredientRemoved(ctrl.type)}
            />
        ))}
  
        <button 
         className={classes.OrderButton} 
         disabled={!props.purchaseable}
         onClick={props.ordered} > ORDER NOW </button>

    </div>
    </>
)

export default BuildControls