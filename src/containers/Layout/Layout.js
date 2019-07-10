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
                    <p>UVBin</p>
                </div>
                {this.props.children}
            </Aux>
        );
    }
}

export default Layout;