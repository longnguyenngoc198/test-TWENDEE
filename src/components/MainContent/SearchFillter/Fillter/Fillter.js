import React, { useContext, useEffect, useRef, useState } from 'react';
import Options from './Options';

import { FaChevronDown } from 'react-icons/fa';

import { ThemeContext } from '@/features/ThemeContext/ThemeContext';
import './Fillter.scss';
import { useParams } from 'react-router-dom';

const Fillter = (props) => {
    const { parent } = props;
    const themeContext = useContext(ThemeContext);

    const selectRef = useRef(null);
    const [isShowOptions, setIsShowOptions] = useState(false);

    const { pageNumber = 1 } = useParams();
    const [valueOptions, setValueOptions] = useState('Page 1');
    // console.log(pageNumber);
    useEffect(() => {
        setValueOptions(`Page ${pageNumber}`);
    }, [pageNumber]);
    parent(pageNumber);
    console.log(pageNumber);
    const handleOptions = (e) => {
        if (selectRef.current)
            setIsShowOptions(selectRef.current.contains(e.target));
        // console.log(selectRef.current.contains(e.target));
    };

    useEffect(() => {
        if (isShowOptions) {
            document.addEventListener('click', handleOptions);
        }
        return () => {
            document.removeEventListener('click', handleOptions);
        };
    }, [isShowOptions]);
    return (
        <div className="fillter">
            <h3>Choose Options</h3>
            <div className="fillter__wrap" onClick={handleOptions}>
                <div
                    ref={selectRef}
                    className={`fillter__select ${themeContext.theme}`}
                >
                    <span>{valueOptions}</span>
                    <FaChevronDown />
                </div>
                <Options isShowOptions={isShowOptions} />
            </div>
        </div>
    );
};

export default Fillter;
