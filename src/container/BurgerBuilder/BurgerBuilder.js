import React, { Component } from 'react'
import Burger from '../../component/Burger/Burger'
import Hoc from '../../hoc/hoc'
import BuildControls from '../../component/Burger/buildControls/buildControls';
import Modal from '../../component/UI/Modal/Modal';
import OrderSummary from '../../component/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    cheese: 15,
    salad: 10,
    potatocake: 5,
    bacon: 15
}




class BurgerBuilder extends Component {

    state = {
        ingredient: {
            cheese: 0,
            salad: 0,
            potatocake: 0,
            bacon: 0
        },
        totalPrice: 30,
        purchaseable: false,
        purchasing: false

    }


    updatePurchaseState(ingredient) {
        const sum = Object.keys(ingredient)
            .map(igKey => {
                return ingredient[igKey]
            }).reduce((sum, el) => {
                return sum + el
            }, 0)
        this.setState({ purchaseable: sum > 0 })
    }





    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredient
        }
        updateIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            ingredient: updateIngredients, totalPrice: newPrice
        })

        this.updatePurchaseState(updateIngredients)

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        if (oldCount <= 0) {
            return
        }
        const updatedCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredient
        }
        updateIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({
            ingredient: updateIngredients, totalPrice: newPrice
        })

        this.updatePurchaseState(updateIngredients)

    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }
    
    purchaseCancelHandler = () => {
        this.setState({ purchasing:false })
    }




    render() {
        return <Hoc>
            <Modal show={this.state.purchasing} 
             modalClosed={this.purchaseCancelHandler}
             price={this.state.totalPrice}
            >

                <OrderSummary
                    ingredients={this.state.ingredient} />
           </Modal>
            <Burger ingredient={this.state.ingredient} />
            <BuildControls
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                price={this.state.totalPrice}
                purchaseable={this.state.purchaseable}
                ordered={this.purchaseHandler}

            />
        </Hoc>
    }
}

export default BurgerBuilder