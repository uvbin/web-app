import React, { Component } from 'react';
import ContentTile from '../../components/ContentTile/ContentTile';

class ContentTiles extends Component {
    state = {
        contentTiles: [1, 2, 3, 4, 5]
    };

    render () {
        return (
            <div>
                {this.state.contentTiles.map((el, ind) => {
                    return <ContentTile index={ind}/>
                })}
            </div>
        );
    }
}

export default ContentTiles;