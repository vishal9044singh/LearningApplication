import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const baseConfig = {
    baseURL: process.env.REACT_APP_SERVER_IP_ADDRESS,
    headers: {
        'Content-Type': 'application/json',
    },
};

const axiosWithToken = axios.create(baseConfig);

axiosWithToken.interceptors.request.use(
    async (config) => {
        // const token = localStorage.getItem('access_Token');
        const token = await AsyncStorage.getItem('access_Token');
        console.log('value of token from asyncStorage is', token)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const axiosWithoutToken = axios.create(baseConfig);

export { axiosWithToken, axiosWithoutToken };