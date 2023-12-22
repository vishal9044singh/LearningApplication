import React from "react";
import { Text, View, TouchableOpacity, Alert, ScrollView } from "react-native";
import Checkbox from 'expo-checkbox';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, useContext } from "react";
import { themeColors } from "../theme";
import signup from "../assets/css/signup";
import { SignUpContext } from '../context/signupContext';
import { UserContext } from '../context/userContext';
import styles from "../assets/css/styles";
import { axiosWithoutToken } from "../config/axiosConfig";
import { showAlert } from "./UsefulAlerts";
import { commonError } from "../utils/usefulFunctions";

export default function TermsAndConditions() {
    const [isChecked, setChecked] = useState(false);
    const [termsText, setTermsText] = useState('')
    const { signUpData, setSignUpData } = useContext(SignUpContext);
    const { user, setUser } = useContext(UserContext)

    const handleContinue = async () => {
        try {
            if (!isChecked) {
                Alert.alert('Reqired!', 'Please Accept the Terms And Conditions');
                return;
            }
            console.log('Value of signup data at line 28 is', signUpData)
            let response = await axiosWithoutToken.post('/auth/studentRegistration', signUpData);
            if (response?.data?.success) {
                console.log('Got success data at line 28 is',response.data)
                let res = await axiosWithoutToken.post('/auth/studentSignIn', { key: 'mpin', mobileNumber: signUpData.mobileNumber, mpin: signUpData.mpin });
                if (res?.data?.success) {
                    console.log('value of mpin login at line 34 is', res.data)
                    await AsyncStorage.setItem('access_Token',res.data.access_Token);
                    let token = await AsyncStorage.getItem('access_Token')
                    console.log('value of accessToken is',token)
                    setUser(true)
                }
            }
        }
        catch (error) {
            console.log('Got error in signup',error.response.data)
            showAlert(commonError(error))
        }
    }


    useEffect(() => {
        (async function () {
            try {
                let response = await axiosWithoutToken.get('/student/getTermsAndConditions');
                if (response?.data?.success) {
                    setTermsText(response.data.termsAndConditions)
                }
            }
            catch (error) {
                console.log('Got error in fetching Terms and conditons', error.response.data);
            }
        })()
    }, [])

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 p-4 pt-4 rounded-t-3xl bg-white">
                <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>Terms And Conditions</Text>
                <ScrollView >
                    <WebView
                        source={{
                            html: `<html><head><style>body { font-size: 35px; color:${themeColors.bgBold} }</style></head><body>${termsText}</body></html>`,
                        }}
                        style={{ height: 600 }}
                        onError={(syntheticEvent) => {
                            const { nativeEvent } = syntheticEvent;
                            console.warn('WebView error: ', nativeEvent);
                        }}
                    />
                    <View style={signup.checkbox} >
                        <Checkbox
                            style={styles.checkbox}
                            color={isChecked ? themeColors.bg : undefined}
                            value={isChecked}
                            onValueChange={setChecked}
                        />
                        <Text style={signup.checkboxText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    </View>

                </ScrollView>
                <TouchableOpacity activeOpacity={0.9}
                    onPress={handleContinue}
                    className="py-3 mt-6 rounded-full"
                    style={{ backgroundColor: isChecked ? themeColors.bg : 'lightgrey' }}>
                    <Text className="font-xl text-center text-white">
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}