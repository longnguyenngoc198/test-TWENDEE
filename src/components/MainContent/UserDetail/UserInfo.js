import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '@/store/actions/Action';

const UserInfo = (props) => {
    // const dispatch = useDispatch();
    // const data = useSelector((state) => state.UserReducer.users[0]);
    // console.log(data);
    // useEffect(() => {
    //     dispatch(getUsers());
    // }, [dispatch]);
    const { data } = props;
    return (
        <div className="user-info">
            <h3 className="user-info__name">{`${data.titleName} ${data.firstName} ${data.lastName}`}</h3>
            <table>
                <tbody>
                    <tr>
                        <td className="user-info__title">Full Name</td>
                        <td>:</td>
                        <td className="user-info__value">
                            {`${data.firstName} ${data.lastName}`}
                        </td>
                    </tr>

                    <tr>
                        <td className="user-info__title">Gender</td>
                        <td>:</td>
                        <td className="user-info__value">{data.gender}</td>
                    </tr>

                    <tr>
                        <td className="user-info__title">Address</td>
                        <td>:</td>
                        <td className="user-info__value">
                            {`${data.street}, ${data.city}, ${data.country}`}
                        </td>
                    </tr>

                    <tr>
                        <td className="user-info__title">Email</td>
                        <td>:</td>
                        <td className="user-info__value">{data.email}</td>
                    </tr>

                    <tr>
                        <td className="user-info__title">Phone</td>
                        <td>:</td>
                        <td className="user-info__value">(532)-589-0898</td>
                    </tr>

                    <tr>
                        <td className="user-info__title">Username</td>
                        <td>:</td>
                        <td className="user-info__value">{data.username}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UserInfo;
