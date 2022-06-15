import { GET_USERS, GET_USER, SET_LOADING } from '../type';

const initialState = {
    users: [],
    user: [],
    loading: true,
};

const Reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_USERS:
            // console.log(payload);
            return { ...state, users: payload };
        // case GET_USER:
        //     // console.log('user [0]', payload);
        //     return { ...state, user: payload[0] };
        case SET_LOADING:
            // console.log(payload);
            return { ...state, loading: payload };
        default:
            return state;
    }
};
export default Reducer;
