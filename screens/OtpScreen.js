import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { themeColors } from '../theme';
import OtpInput from '../components/OtpInput';
import otpStyle from '../assets/css/otpStyle';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../context/userContext';
import { useRoute } from '@react-navigation/native';
import { SignUpContext } from '../context/signupContext';
import { useAxiosWithoutToken } from '../config/axiosConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showAlert } from '../components/UsefulAlerts';
import { commonError } from '../utils/usefulFunctions';

export default function OtpScreen() {
    const axiosWithoutToken = useAxiosWithoutToken();
    const navigation = useNavigation();
    const route = useRoute();
    const { setUser } = useContext(UserContext)
    const { action, mobileNumber } = route.params;
    const { signUpData, setSignUpData } = useContext(SignUpContext)
    const [otp, setOtp] = useState(['', '', '', '']);

    const handleContinue = async () => {
        try {
            let nonEmptyArray = otp.filter(element => element !== "");
            if (nonEmptyArray.length != 4) {
                Alert.alert('Invalid!', 'Please Enter Valid OTP!');
                return;
            }
            let finalOtp = nonEmptyArray.join('');
            if (action == 'Login') {
                let response = await axiosWithoutToken.post('/auth/studentSignIn', { key: "mobileNumber", mobileNumber: mobileNumber, otp: finalOtp });
                if (response?.data?.success) {
                    await AsyncStorage.setItem('access_Token', response.data.access_Token)
                    let token = await AsyncStorage.getItem('access_Token')
                    if (token) {
                        setUser(true)
                    }
                }
            }
            else {
                let response = await axiosWithoutToken.post('/auth/verifyOtp', { mobileNumber: signUpData.mobileNumber, otp: finalOtp });
                if (response?.data?.success) {
                    setSignUpData((prevState) => ({
                        ...prevState,
                        otp: finalOtp
                    }))
                    navigation.navigate('Email')
                }
            }
        }
        catch (error) {
            showAlert(commonError(error))
        }
    }

    return (
        <View className="flex-1" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
                <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>Verification</Text>
                <View className='p-2 mt-12'>
                    <Text className="text-gray-700 mb-3">Enter the OTP you received</Text>
                    <OtpInput otp={otp} setOtp={setOtp} />
                    <View style={otpStyle.otpText}>
                        <Text className="text-gray-700">You should receive the otp in</Text>
                        <Text style={{ color: themeColors.bg }}> 30 Second</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.9} className="py-3 mt-6 rounded-full" style={{ backgroundColor: themeColors.bg }}
                        onPress={handleContinue}>
                        <Text className="font-xl text-center text-white">Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};