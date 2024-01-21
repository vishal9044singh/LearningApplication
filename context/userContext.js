import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, createContext, useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(false);

    const isUserExists = async () => {
        let token = await AsyncStorage.getItem("access_Token")
        if (token) {
            setUser(true)
        }
        setTimeout(async () => {
            await SplashScreen.hideAsync();
        }, 1000)
    }

    useEffect(() => {
        isUserExists();
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }} >
            {children}
        </UserContext.Provider>
    )
}
