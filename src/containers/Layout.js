import React, { useState } from 'react';
import SearchPage from './SearchPage';
import AccountPage from './AccountPage.js';
import classes from '../css/Layout.module.css';

const Layout = (props) => {
    const [state, setState] = useState({
        searchContent: '',
        currentPage: <SearchPage />
    })

    const accountPageHandler = () => {
        setState({...state, currentPage: <AccountPage />})
    }

    return (
        <div>
            {state.currentPage}
        </div>
    );
}

export default Layout;