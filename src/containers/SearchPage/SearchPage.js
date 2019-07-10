import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import ContentSearch from '../../components/ContentSearch/ContentSearch';

class SearchPage extends Component {

    render () {
        return (
            <Banner>
                <ContentSearch />
            </Banner>
        );
    }
}

export default SearchPage;