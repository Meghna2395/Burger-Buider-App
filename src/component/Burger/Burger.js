import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'


const Burger = (props) => {
       let tranformedIngredients = Object.keys(props.ingredient)
       .map(igKey => {
           return [...Array(props.ingredient[igKey])]
           .map((_,i) => {
               return <BurgerIngredient key={igKey + i} type={igKey} />
           })
       }).reduce((arr,el) => {
           return arr.concat(el)
       },[]);

       if ( tranformedIngredients.length === 0){
           tranformedIngredients = <p>Please Start Adding Ingredients  </p>
       }

       console.log(tranformedIngredients)
      //["cheese","salad","potatocake","bacon"]


    return <div className={classes.Burger} >
           <BurgerIngredient type="bread-top" />
            {tranformedIngredients}
           <BurgerIngredient type="bread-bottom" />

    </div>
}

export default Burger