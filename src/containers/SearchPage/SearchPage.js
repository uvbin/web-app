import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import ContentSearch from '../../components/ContentSearch/ContentSearch';
import Filter from '../Filter/Filter';
import Aux from '../../hoc/Auxiliary';

class SearchPage extends Component {

    render () {
        return (
            <Aux>
                <Banner>
                    <ContentSearch />
                </Banner>
                <Filter />
            </Aux>
        );
    }
}

export default SearchPage;