import React, { Component } from 'react';
// router
import { BrowserRouter as Router } from 'react-router-dom';
import RouteHandler from './router/route-handler';
// layout components
import Header from './components/layout/header';
import Content from './components/layout/content';
import Footer from './components/layout/footer';
// common components
import NavBar from './components/common/navbar';
// server
import './server';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: true,
            countOfCardsInShoppingCart: 0
        }
    }

    handleCountOfCardsInShoppingCart = (countOfCards) => {
        this.setState(prevState => {
            return {
                countOfCardsInShoppingCart: countOfCards
            }
        });
    }

    addToShoppingCart = (productItem) => {
        if (!this.state.productsList.includes(productItem)) {
            this.setState(prevState => {
                return {
                    productsList: [...prevState.productsList, productItem],
                }
            })
        }
    }

    authentication = () => {
        this.setState(prevState => {
            return {
                isAuthenticated: !prevState.isAuthenticated
            }
        })
    }

    render() {
        return (
            <Router>
                <Header>
                    <NavBar counter={this.state.countOfCardsInShoppingCart} handleAuthentication={this.authentication} loginBtnValue={this.state.isAuthenticated ? 'logout' : 'login'} />
                </Header>
                <Content addToShoppingCart={this.addToShoppingCart}>
                    <RouteHandler handleCountOfCardsInShoppingCart={this.handleCountOfCardsInShoppingCart} isAuthenticated={this.state.isAuthenticated} />
                </Content>
                <Footer />
            </Router>
        );
    }
}

export default App;