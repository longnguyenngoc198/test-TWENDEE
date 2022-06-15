import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '@/features/ThemeContext/ThemeContext';

const Card = ({
    picture,
    country,
    titleName,
    firstName,
    lastName,
    email,
    username,
    onClick,
}) => {
    const themeContext = useContext(ThemeContext);
    return (
        <Link to={`/api`} style={{ display: 'block', textDecoration: 'none' }}>
            <div
                className={`users__item ${themeContext.theme}`}
                onClick={onClick}
            >
                <div className="users__avatar">
                    <img className="users__img" src={picture} alt="" />
                </div>
                <div className="info">
                    <h3>{`${titleName}. ${firstName} ${lastName}`}</h3>
                    <div>
                        <p>
                            Country: <span>{country}</span>
                        </p>
                        <p>
                            Username: <span>{username}</span>
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
