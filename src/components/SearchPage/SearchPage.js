import React, { Component } from 'react';
import Banner from '../Banner/Banner';
import ContentSearch from '../ContentSearch/ContentSearch';

import ContentViewer from '../ContentViewer/ContentViewer';


class SearchPage extends Component {

    render () {
        return (
            <div>
                <Banner>
                    <ContentSearch />
                </Banner>
                <ContentViewer />
            </div>
        );
    }
}

export default SearchPage;