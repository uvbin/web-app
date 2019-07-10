import React from 'react';
import classes from './ContentSearch.module.css';

const contentSearch = (props) => {
    return(
        <div className={classes.ContentSearch}>
            <form>
                <input type="text" placeHolder="Search..."/>
                <button>Search</button>
            </form>
        </div>
    );
}

export default contentSearch;