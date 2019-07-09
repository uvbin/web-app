import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';

import classes from './Layout.module.css';

class Layout extends Component {

    render () {
        return (
            <Aux>
                <div className={classes.Layout}>
                    <p>Shweet Layout!</p>
                </div>
                {this.props.children}
            </Aux>
        );
    }
}

export default Layout;