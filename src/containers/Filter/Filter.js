import React, { useState } from 'react';

import classes from './Filter.module.css';
import FilterList from '../../components/FilterList/FilterList';

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