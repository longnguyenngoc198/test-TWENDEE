import React, { useContext, useEffect, useRef } from 'react';

import { ThemeContext } from '@/features/ThemeContext/ThemeContext';
import './Fillter.scss';

import { useNavigate } from 'react-router-dom';

const Options = ({ isShowOptions }) => {
    const navigate = useNavigate();

    const themeContext = useContext(ThemeContext);
    const optionsRef = useRef(Options);
    useEffect(() => {
        if (isShowOptions) {
            optionsRef.current.style.maxHeight = `${optionsRef.current.scrollHeight}px`;
            optionsRef.current.style.transform = 'scaleY(1)';
        } else {
            optionsRef.current.style.maxHeight = `0`;
            optionsRef.current.style.transform = 'scaleY(1)';
        }
    }, [isShowOptions]);

    const pages = [
        'Page 1',
        'Page 2',
        'Page 3',
        'Page 4',
        'Page 5',
        'Page 6',
        'Page 7',
        'Page 8',
        'Page 9',
        'Page 10',
    ];

    const handleValueOption = (page, i) => {
        if (page !== 'Page 1') {
            navigate(`/page/${i + 1}`);
        } else {
            navigate('/');
        }
    };
    return (
        <ul className={`fillter__list ${themeContext.theme}`} ref={optionsRef}>
            {pages.map((page, i) => (
                <li key={i} onClick={() => handleValueOption(page, i)}>
                    <span>{page}</span>
                </li>
            ))}
        </ul>
    );
};

export default Options;
