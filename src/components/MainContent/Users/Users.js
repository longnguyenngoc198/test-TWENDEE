import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScrollBar from 'react-perfect-scrollbar';

import Search from '../SearchFillter/Search/Search';
import { getUsers } from '@/store/actions/Action';
import Loading from '@/components/Loading/Loading';
import Card from './Card';
import './Users.scss';

const Users = (props) => {
    const { page, users } = props;
    const dispatch = useDispatch();
    const data = useSelector((state) => state.UserReducer.users);
    const loading = useSelector((state) => state.UserReducer.loading);
    // console.log(dataUser);
    users(data);
    useEffect(() => {
        // console.log('test uesr', page);
        dispatch(getUsers(page));
        // dataUser(data);
    }, [page]);
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <ScrollBar style={{ maxHeight: '70vh', overflow: 'hidden' }}>
                    {/* <Search data={data} /> */}
                    <div className="users">
                        {data.map((user, index) => (
                            <Card
                                key={index}
                                picture={user.picture}
                                country={user.country}
                                titleName={user.titleName}
                                firstName={user.firstName}
                                lastName={user.lastName}
                                email={user.email}
                                username={user.username}
                                onClick={() => user}
                            />
                        ))}
                    </div>
                </ScrollBar>
            )}
        </>
    );
};

export default Users;
