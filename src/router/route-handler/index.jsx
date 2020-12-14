import React, { Component } from 'react';
// router
import { Route, Switch } from 'react-router-dom';
import RouteAuth from '../RouteAuth';
// pages
import Home from "../../pages/home";
import ProductsList from "../../pages/products-list";
import ShoppingCart from "../../pages/shopping-cart";
import ProductItem from "../../pages/product-item";
import NotFound from "../../pages/not-found";

class RouteHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardsInShoppingCart: [],
            countOfCards: 0
        }
    }

    handleAddToShoppingCart = (product) => {
        if (!this.state.cardsInShoppingCart.includes(product)) {
            this.setState(prevState => {
                return {
                    cardsInShoppingCart: [...prevState.cardsInShoppingCart, product],
                }
            }, () => this.handleCountOfCardsInShoppingCart(this.state.cardsInShoppingCart.length));
        }
    }

    handleCountOfCardsInShoppingCart = (count) => {
        this.props.handleCountOfCardsInShoppingCart(count);
    }

    handleRemoveFromShoppingCart = (productItem) => {
        const newList = this.state.cardsInShoppingCart.filter(
            product => product.id !== productItem.id
        );

        this.setState({
            cardsInShoppingCart: [...newList]
        }, () => this.handleCountOfCardsInShoppingCart(this.state.cardsInShoppingCart.length))
    }


    render() {
        const { cardsInShoppingCart } = this.state;
        const { isAuthenticated } = this.props;
        return (
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/products-list' exact>
                    <ProductsList addToShoppingCart={this.handleAddToShoppingCart} />
                </Route>
                <Route path='/cart' exact>
                    <RouteAuth isAuthenticated={isAuthenticated}>
                        <ShoppingCart cardsInShoppingCart={cardsInShoppingCart}
                            removeFromShoppingCart={this.handleRemoveFromShoppingCart} />
                    </RouteAuth>
                </Route>
                <Route path='/product-item/:productId' exact>
                    <ProductItem />
                </Route>
                <Route path='*' exact>
                    <NotFound />
                </Route>
            </Switch>
        );
    }
}

export default RouteHandler;