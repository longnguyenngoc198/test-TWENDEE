import React from 'react';
import Search from './Search/Search';
import Fillter from './Fillter/Fillter';
import './SearchFillter.scss';

const SearchFillter = (props) => {
    const { parent, dataFromUser } = props;
    console.log(dataFromUser);
    return (
        <div className="search-fillter-container">
            <Fillter parent={parent} />
        </div>
    );
};

export default SearchFillter;
