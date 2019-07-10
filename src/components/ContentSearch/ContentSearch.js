import React from 'react';
import classes from './ContentSearch.module.css';

const contentSearch = (props) => {
    return(
        <div className={classes.ContentSearch}>
            <input className={classes.enter} type="text" placeHolder="Search..."/>
        </div>
    );
}

export default contentSearch;