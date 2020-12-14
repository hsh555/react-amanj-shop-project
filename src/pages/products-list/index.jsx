import React, { Component } from 'react';
// router
import { Link } from 'react-router-dom';
// common components
import Loading from '../../components/common/loading';
// server
import getProductsFromMockApi from '../../server';
// styles
import './style.scss';


class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.counter = 0;
        this.state = {
            productsList: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts = async () => {
        let res = await getProductsFromMockApi();
        this.setState({
            productsList: res,
            isLoading: false
        });
    }

    handleAddToShoppingCart = (product) => {
        this.props.addToShoppingCart(product);
    }

    addToShoppingCart = (product) => {
        this.props.addToShoppingCart(product);
    }

    render() {
        const { productsList, isLoading } = this.state;
        return (
            <div className="productsList">
                {(isLoading) ? <Loading /> : productsList.map(item => {
                    return (
                        <div className="card" key={item.id}>
                            <Link to={`/product-item/${item.id}`}>{item.name}</Link>
                            <p>{item.price}</p>
                            {item.hasOff && <p>sale</p>}
                            <button onClick={() => this.addToShoppingCart(item)}>add to cart</button>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default ProductsList;