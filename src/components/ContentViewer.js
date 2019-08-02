import React from 'react';
import ContentTiles from './ContentTiles';
import Filter from './Filter';
import classes from '../css/ContentViewer.module.css';

const contentViewer = (props) => {
    return (
        <div className={classes.gridContainer}>
            <Filter />
            <ContentTiles />
        </div>
    );
}

export default contentViewer;