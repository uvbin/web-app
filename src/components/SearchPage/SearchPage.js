import React from 'react';
import Banner from '../Banner/Banner';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ContentSearch from '../ContentSearch/ContentSearch';
import ContentViewer from '../ContentViewer/ContentViewer';


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