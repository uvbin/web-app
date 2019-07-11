import React, { Component } from 'react';

import classes from './Filter.module.css';
import FilterList from '../../components/FilterList/FilterList';

class Filter extends Component {
    state = {
        filterHeadings: ['FileType', 'Size', 'Price']
    }

    render () {
        return (
            <div className={classes.body}>
                {this.state.filterHeadings.map((el, index) => {
                    return <FilterList heading={el} />;
                })}
            </div>
        )
    }
}

export default Filter;