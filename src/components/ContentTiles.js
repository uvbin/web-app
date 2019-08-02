import React, { useState } from 'react';
import ContentTile from './ContentTile';

import classes from '../css/ContentTiles.module.css';

const ContentTiles = (props) => {

    const [contentTiles, setContentTiles] = useState(new Array(100).fill(undefined).map((val,idx) => idx));

    return (
        <div className={classes.container}>
            {contentTiles.map((el, ind) => {
                return <ContentTile index={ind}/>
            })}
        </div>
    );
}

export default ContentTiles;