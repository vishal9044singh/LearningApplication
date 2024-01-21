import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useEffect } from 'react';
import { config } from './systemConfig';
import { useLoader } from '../context/loaderContext';

const baseConfig = {
    baseURL: config.SERVER_IP_ADDRESS,
    headers: {
        'Content-Type': 'application/json',
    },
};

const axiosWithToken = axios.create(baseConfig)

const useAxiosWithToken = () => {
    const { setLoading } = useLoader();
    useEffect(() => {
        const requestInterceptor = axiosWithToken.interceptors.request.use(
            async (config) => {
                setLoading(true);
                const token = await AsyncStorage.getItem('access_Token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                setLoading(false);
                return Promise.reject(error);
            }
        );
        const responseInterceptor = axiosWithToken.interceptors.response.use(
            (response) => {
                setLoading(false);
                return response;
            },
            (error) => {
                setLoading(false);
                return Promise.reject(error);
            }
        );
        return () => {
            axiosWithToken.interceptors.request.eject(requestInterceptor);
            axiosWithToken.interceptors.response.eject(responseInterceptor);
        };
    }, [setLoading]);

    return axiosWithToken;
};

const axiosWithoutToken = axios.create(baseConfig);

const useAxiosWithoutToken = () => {
  const { setLoading } = useLoader();

  useEffect(() => {
    const requestInterceptor = axiosWithoutToken.interceptors.request.use(
      (config) => {
        setLoading(true);
        return config;
      },
      (error) => {
        setLoading(false);
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axiosWithoutToken.interceptors.response.use(
      (response) => {
        setLoading(false);
        return response;
      },
      (error) => {
        setLoading(false);
        return Promise.reject(error);
      }
    );

    return () => {
      axiosWithoutToken.interceptors.request.eject(requestInterceptor);
      axiosWithoutToken.interceptors.response.eject(responseInterceptor);
    };
  }, [setLoading]);

  return axiosWithoutToken;
};

export { useAxiosWithoutToken, useAxiosWithToken };