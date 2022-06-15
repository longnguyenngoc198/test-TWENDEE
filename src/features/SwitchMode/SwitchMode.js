import React, { useRef, useState, useEffect, useContext } from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

import { ThemeContext } from '@/features/ThemeContext/ThemeContext';

import './SwitchMode.scss';
const SwitchMode = () => {
    // useContext truyen du lieu tu cha sang con khong can props
    const themeContext = useContext(ThemeContext);
    // console.log('themeContext', themeContext);
    //useRef luu 1 gia qua 1 tham chieu ben ngoai function
    const inputRef = useRef();
    const circleRef = useRef();
    const toggleRef = useRef();
    //set sate dark/lighr
    const [isDark, setDark] = useState(false);

    //isDark thay doi set lai gia check cua input
    useEffect(() => {
        inputRef.current.checked = isDark;
    }, [isDark]);

    //isDark thay doi, set lai background
    useEffect(() => {
        const changeBackgroundToggle = () => {
            if (isDark) {
                Object.assign(circleRef.current.style, {
                    background: '#333',
                });
                Object.assign(toggleRef.current.style, {
                    background: '#fff',
                });
            } else {
                Object.assign(circleRef.current.style, {
                    background: '#fff',
                });
                Object.assign(toggleRef.current.style, {
                    background: '#2b6da6',
                });
            }
        };
        changeBackgroundToggle();

        document.addEventListener('resize', changeBackgroundToggle);
        return () => {
            document.removeEventListener('resize', changeBackgroundToggle);
        };
    }, [isDark]);

    const handleToggle = () => {
        inputRef.current.checked = !inputRef.current.checked;
        setDark(inputRef.current.checked);
        themeContext.toggleTheme();
        console.log(themeContext.theme);
    };
    return (
        //lable check mode
        <div ref={toggleRef} className="toggle-mode" onClick={handleToggle}>
            <input
                type="checkbox"
                name=""
                id="check"
                className="toggle-mode__check"
                ref={inputRef}
            />
            <div className="toggle-mode__icon">
                {isDark ? <RiMoonFill /> : <RiSunFill />}
            </div>
            <div className="toggle-mode__circle" ref={circleRef}></div>
        </div>
    );
};

export default SwitchMode;
