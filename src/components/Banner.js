import React from 'react';
import PropTypes from 'prop-types';

import classes from '../css/Banner.module.css';
import Aux from '../hoc/Auxiliary';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import BannerImage from '../assets/SearchPage/BannerImage.jpg';
import ContentSearch from './ContentSearch'


const ElevationScroll = (props) => {
    const { 
        children 
    } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const Banner = (props) => {
    //body

    return (
        <React.Fragment>
        <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar>
            <Toolbar>
              <Typography variant="h5">uvbin</Typography>
              <ContentSearch/>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
      </React.Fragment>
    );
}

export default Banner;