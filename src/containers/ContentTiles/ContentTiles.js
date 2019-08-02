import React, { useState } from 'react';
import ContentTile from '../../components/ContentTile/ContentTile';
import classes from './ContentTiles.module.css';

const ContentTiles = (props) => {
    // state = {
    //     contentTiles: [1, 2, 3, 4, 5]
    // };

    const [contentTiles, setContentTiles] = useState([1, 2, 3, 4, 5]);

    return (
        <div className={classes.container}>
            {contentTiles.map((el, ind) => {
                return <ContentTile index={ind}/>
            })}
        </div>
    );
}

export default ContentTiles;