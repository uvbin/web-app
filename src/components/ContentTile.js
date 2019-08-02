import React from 'react';
import { Card, CardActionArea } from '@material-ui/core';

import classes from '../css/ContentTile.module.css';

const contentTile = (props) => {
    const {
        index,

    } = props
    
    return (
        <Card className={[classes.container, classes.border].join(' ')}>
            <CardActionArea>
                <div className={classes.title}>
                    <h1>Tile {index}</h1>
                </div>
                <img src="https://via.placeholder.com/150"/>
            </CardActionArea>
        </Card>
    );
}

export default contentTile;