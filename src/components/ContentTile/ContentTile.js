import React from 'react';
import classes from './ContentTile.module.css';

const contentTile = (props) => {
    return (
        <div className={classes.Tile}>
            <h1>I'm a content tile: {props.index}</h1>
            <ul>
                <li>Image</li>
                <li>Description</li>
                <li>Price</li>
                <li>Formats</li>
            </ul>
        </div>
    );
}

export default contentTile;