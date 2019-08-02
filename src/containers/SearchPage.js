import React from 'react';
import Banner from '../components/Banner';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ContentSearch from '../components/ContentSearch';
import ContentViewer from '../components/ContentViewer';


const searchPage = () => {
    return (
        <div>
            <Banner>
                <ContentSearch />
            </Banner>
            <Container>
                <Box my={2}>
                    <ContentViewer />
                </Box>
          </Container>
        </div>
    );
}

export default searchPage;