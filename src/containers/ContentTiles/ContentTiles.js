import React, { useState } from 'react';
import ContentTile from '../../components/ContentTile/ContentTile';

const ContentTiles = (props) => {
    // state = {
    //     contentTiles: [1, 2, 3, 4, 5]
    // };

    const [contentTiles, setContentTiles] = useState([1, 2, 3, 4, 5]);

    return (
        <div>
            {contentTiles.map((el, ind) => {
                return <ContentTile index={ind}/>
            })}
        </div>
    );
}

export default ContentTiles;