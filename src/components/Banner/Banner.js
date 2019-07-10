import React from 'react';
import classes from './Banner.module.css';
import Aux from '../../hoc/Auxiliary';
import BannerImage from '../../assets/SearchPage/BannerImage.jpg';

const banner = (props) => {
    return (
        <div className={classes.container}>
            <img src={BannerImage} className={classes.BannerImage}/>
            <div className={classes.centered}>
                {props.children}
            </div>
        </div>
    );
}

export default banner;