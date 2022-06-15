import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '@/store/actions/Action';

import { ThemeContext } from '@/features/ThemeContext/ThemeContext';
import { useNavigate } from 'react-router-dom';

import UserInfo from './UserInfo';
import './UserDetail.scss';
const UserDetail = (props) => {
    const themeContext = useContext(ThemeContext);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector((state) => state.UserReducer.users[0]);
    // console.log('test detai', data);
    useEffect(() => {
        dispatch(getUsers());
    }, []);
    return (
        <div className={`user-detail`}>
            <button
                className={`user-detail__button ${themeContext.theme}`}
                onClick={() => navigate(-1)}
            >
                Go Back
            </button>
            <div className="user-detail__wrapper">
                <div className="user-detail__pic">
                    <img src={data.picture} alt="" />
                </div>
                <UserInfo data={data} />
            </div>
        </div>
    );
};

export default UserDetail;
