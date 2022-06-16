import React from 'react';
import Sort from './Search/Search';
import Fillter from './Fillter/Fillter';
import './SearchFillter.scss';

const SearchFillter = (props) => {
    const { parent, dataFromUser } = props;
    console.log(dataFromUser);
    return (
        <div className="search-fillter-container">
            <Fillter parent={parent} />
            <Sort data={dataFromUser} />
        </div>
    );
};

export default SearchFillter;
