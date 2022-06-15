import React, { useState } from 'react';
import SearchFillter from './SearchFillter/SearchFillter';
import Users from './Users/Users';

import UserDetail from './UserDetail/UserDetail';
const MainContent = () => {
    const [test, setTest] = useState(1);
    const [dataUsers, setDataUsers] = useState([]);
    const testFunc = (chilData) => {
        setTest(chilData);
    };

    const getDataFromUsers = (dataUsers) => {
        setDataUsers(dataUsers);
    };
    // console.log('test:', dataUsers);
    return (
        <div className="container">
            <SearchFillter parent={testFunc} dataFromUser={dataUsers} />
            <Users page={test} users={getDataFromUsers} />
        </div>
    );
};

export default MainContent;
