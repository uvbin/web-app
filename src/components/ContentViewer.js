import React from 'react';

import Filter from '../../containers/Filter/Filter';
import ContentTiles from './ContentTiles';

import classes from './ContentViewer.module.css';

const contentViewer = (props) => {
    return (
        <div className={classes.gridContainer}>
            <Filter />
            <ContentTiles />
        </div>
    );
}

export default contentViewer;