import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.css';

class ProductItem extends Component {
    render() {
        const { match } = this.props;
        const { params } = match;
        const { productId } = params

        return (
            <div className="product-id">
                Product {productId}
            </div>
        );
    }
}

export default withRouter(ProductItem);