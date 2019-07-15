import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import SearchPage from '../../components/SearchPage/SearchPage';
import AccountPage from '../../components/AccountPage/AccountPage.js';

import classes from './Layout.module.css';

class Layout extends Component {
    state = {
        searchContent: '',
        currentPage: <SearchPage />
    }

    accountPageHandler = () => {
        this.setState({currentPage: <AccountPage />})
    }

    render () {
        return (
            <Aux>
                <div className={classes.Layout}>
                    <p>UVBin</p>
                    <button onClick={this.accountPageHandler}>Account</button>
                </div>
                {this.state.currentPage}
            </Aux>
        );
    }
}

export default Layout;