import React, { Component } from 'react';
// router
import { Link, withRouter } from 'react-router-dom';
// list of links
import navBarLinks from '../../../navbar-links';
// styles
import styles from './style.module.scss';

class NavBar extends Component {

    OnClickOnLoginBtn = () => {
        this.props.handleAuthentication();
    }

    render() {
        const { location } = this.props;
        const { pathname } = location;
        return (
            <div className={styles.navBar}>
                {navBarLinks.map((link, index) => {
                    if (link.href === pathname) {
                        return (
                            <Link to={link.href} key={index} className={styles.active}>{link.name == 'Cart' ? `Cart(${this.props.counter})` : link.name}</Link>
                        );
                    }
                    return (
                        <Link to={link.href} key={index}>{link.name == 'Cart' ? `Cart(${this.props.counter})` : link.name}</Link>
                    );
                })}
                <button className={styles.loginBtn} onClick={this.OnClickOnLoginBtn}>{this.props.loginBtnValue}</button>
            </div>
        );
    }
}

export default withRouter(NavBar);