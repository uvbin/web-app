import React from 'react';
import Banner from '../Banner/Banner';
import ContentSearch from '../ContentSearch/ContentSearch';

import ContentViewer from '../ContentViewer/ContentViewer';


const searchPage = () => {
    return (
        <div>
            <Banner>
                <ContentSearch />
            </Banner>
            <ContentViewer />
        </div>
    );
}

export default searchPage;