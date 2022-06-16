import React, { useState } from 'react';
import Page from './SearchFillter/SearchFillter';
import Users from './Users/Users';

import UserDetail from './UserDetail/UserDetail';
const MainContent = () => {
    const [page, setPage] = useState(1);
    const [dataUsers, setDataUsers] = useState([]);
    const testFunc = (chilData) => {
        setPage(chilData);
    };

    const getDataFromUsers = (dataUsers) => {
        setDataUsers(dataUsers);
    };
    // console.log('test:', dataUsers);
    return (
        <div className="container">
            <Page parent={testFunc} dataFromUser={dataUsers} />
            <Users page={page} users={getDataFromUsers} />
        </div>
    );
};

export default MainContent;
