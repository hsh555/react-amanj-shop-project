import React, { Component } from 'react';
import './style.scss';

class ShoppingCart extends Component {

    handleRemoveFromShoppingCart = (productItem) => {
        this.props.removeFromShoppingCart(productItem)
    }
    render() {
        return (

            // this.props.show &&
            <div className="shopping-cart">
                {this.props.cardsInShoppingCart == false ? <p>Empty</p> : this.props.cardsInShoppingCart.map(product => {
                    return (
                        <div key={product.id} className="card-in-shopping-cart">
                            <p>{product.name}</p>
                            <p>Total price: {product.price}</p>
                            <button onClick={() => this.handleRemoveFromShoppingCart(product)}>&times;</button>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ShoppingCart;