import React from 'react';
import Banner from '../components/Banner';
import ContentSearch from '../components/ContentSearch';
import ContentViewer from '../components/ContentViewer';


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