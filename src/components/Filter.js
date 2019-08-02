import React, { useState } from 'react';

import classes from '../css/Filter.module.css';
import FilterList from './FilterList';

const Filter = (props) => {

    const [filterHeadings, setFilterHeadings] = useState(['FileType', 'Size', 'Price']);

    return (
        <div className={classes.body}>
            {filterHeadings.map((el, index) => {
                return <FilterList heading={el} />;
            })}
        </div>
    )
}

export default Filter;