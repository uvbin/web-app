import React from 'react';
import classes from '../css/ContentTile.module.css';

const contentTile = (props) => {
    const {
        index,

    } = props
    
    return (
        <div className={[classes.container, classes.border].join(' ')}>
            <div className={classes.title}>
                <h1>Tile {index}</h1>
            </div>
        </div>
    );
}

export default contentTile;