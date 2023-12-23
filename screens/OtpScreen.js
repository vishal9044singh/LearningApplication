import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { themeColors } from '../theme';
import OtpInput from '../components/OtpInput';
import otpStyle from '../assets/css/otpStyle';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../context/userContext';
import { useRoute } from '@react-navigation/native';

export default function OtpScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { setUser } = useContext(UserContext)
    const { mobileNumber, name, action } = route.params;
    const [otp, setOtp] = useState(['', '', '', '']);
    console.log('value of mobileNumber is', mobileNumber, name, action)

    const handleContinue = () => {
        try {
            console.log('value of otp is', otp.length, mobileNumber)
            if (action == 'Login') {
                setUser(true)
            }
            else {
                navigation.navigate('StudentRegistrationScreen', {
                    mobileNumber: mobileNumber,
                    name: name,
                    action: action
                })
            }
            //here will send reques to backed and if verified will set user to true and and save token,mobileNumber in localstorage
        }
        catch (error) {
            console.log('got error in verifying otp',error)
        }
    }

    return (
        <View className="flex-1" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
                <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>Verification</Text>
                <View className='p-2 mt-12'>
                    <Text className="text-gray-700 mb-3">Enter the OTP you recived</Text>
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