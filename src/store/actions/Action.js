import axios from 'axios';
import { GET_USERS, GET_USER, SET_LOADING } from '../type';
const API = 'https://randomuser.me';

export const getUsers = (page) => async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });
    await axios
        .get(`https://randomuser.me/api/?page=${page}&results=10`)
        .then((response) => {
            console.log(response.data.results);
            const users = response.data.results.map(
                ({ name, login, picture, gender, location, email, phone }) => ({
                    titleName: name.title,
                    firstName: name.first,
                    lastName: name.last,
                    email: email,
                    username: login.username,
                    picture: picture.large,
                    thumbnail: picture.thumbnail,
                    gender: gender,
                    street: location.street.name,
                    country: location.country,
                    city: location.city,
                    phone: phone,
                    fullname: name.first + ' ' + name.last,
                }),
            );
            dispatch({ type: SET_LOADING, payload: false });
            dispatch({ type: GET_USERS, payload: users });
        })
        .catch((err) => console.log('Get API Error', err));
};
