import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';

import classes from './Layout.module.css';

class Layout extends Component {
    state = {
        searchContent: ''
    }

    render () {
        return (
            <Aux>
                <div className={classes.Layout}>
                    <p>Shweet Layout!</p>
                    <input type="text"/>
                </div>
                {this.props.children}
            </Aux>
        );
    }
}

export default Layout;