import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import ContentSearch from '../../components/ContentSearch/ContentSearch';
import Filter from '../Filter/Filter';
import Aux from '../../hoc/Auxiliary';
import ContentViewer from '../../components/ContentViewer/ContentViewer';
import ContentTiles from '../ContentTiles/ContentTiles';

class SearchPage extends Component {

    render () {
        return (
            <Aux>
                <Banner>
                    <ContentSearch />
                </Banner>
                <ContentViewer>
                    <Filter />
                    <ContentTiles />
                </ContentViewer>
            </Aux>
        );
    }
}

export default SearchPage;