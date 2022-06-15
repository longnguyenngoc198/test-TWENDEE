import React, { useContext } from 'react';
import SwitchMode from '@/features/SwitchMode/SwitchMode';

import { ThemeContext } from '@/features/ThemeContext/ThemeContext';
import './Header.scss';
const Header = (props) => {
    const themeContext = useContext(ThemeContext);
    return (
        <header className={themeContext.theme}>
            <span>Interview Assignment</span>
            <SwitchMode />
        </header>
    );
};

export default Header;
