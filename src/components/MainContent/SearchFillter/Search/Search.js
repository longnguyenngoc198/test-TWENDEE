import { ThemeContext } from '@/features/ThemeContext/ThemeContext';
import React, { useContext, useEffect, useState } from 'react';
import { ImSortAlphaDesc } from 'react-icons/im';
import './Search.scss';
const Search = ({ data }) => {
    console.log(data);
    const themeContext = useContext(ThemeContext);
    const [state, setSate] = useState(data);
    const handleSort = () => {
        state.sort(function (a, b) {
            const nameA = a.fullname.toUpperCase(); // ignore upper and lowercase
            const nameB = b.fullname.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });

        console.log(state);
    };

    useEffect(() => {
        setSate(data);
    }, [data]);

    return (
        <div className={`search ${themeContext.theme}`} onClick={handleSort}>
            {/* <ImSortAlphaDesc></ImSortAlphaDesc> */}
            <h3 className="search__title">Sort A to Z by Name</h3>
        </div>
    );
};

export default Search;
