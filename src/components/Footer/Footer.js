import React, { useContext } from 'react';
import { ThemeContext } from '@/features/ThemeContext/ThemeContext';
import './Footer.scss';

function Footer() {
    const themeContext = useContext(ThemeContext);
    return (
        <div className={`footer ${themeContext.theme}`}>
            <h4>Copyright &copy; Nguyen Ngoc Long</h4>
            <p>longnguyenngoc198@gmail.com</p>
            <p>0964385339</p>
        </div>
    );
}

export default Footer;
