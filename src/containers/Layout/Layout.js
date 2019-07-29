import React, { useState } from 'react';
import Aux from '../../hoc/Auxiliary';
import SearchPage from '../../components/SearchPage/SearchPage';
import AccountPage from '../../components/AccountPage/AccountPage.js';
import {Button} from 'reactstrap';

import classes from './Layout.module.css';

const Layout = (props) => {
    const [state, setState] = useState({
        searchContent: '',
        currentPage: <SearchPage />
    })

    const accountPageHandler = () => {
        setState({...state, currentPage: <AccountPage />})
    }

    return (
        <Aux>
            <div className={classes.Layout}>
                <p>UVBin</p>
                <Button onClick={accountPageHandler}>Account</Button>
            </div>
            {state.currentPage}
        </Aux>
    );
}

export default Layout;