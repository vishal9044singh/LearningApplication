import React, { useState, useContext } from 'react';
import { useRoute } from '@react-navigation/native';
import { UserContext } from '../context/userContext';
import { View, Text, TouchableOpacity } from 'react-native';
import { themeColors } from '../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { axiosWithoutToken } from '../config/axiosConfig';
import OtpInput from '../components/OtpInput';
import { showAlert } from '../components/UsefulAlerts';
import { commonError } from '../utils/usefulFunctions';

export default function MpinScreen() {
  const route = useRoute();
  const { setUser } = useContext(UserContext)
  const { mobileNumber } = route.params;
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleLogin = async () => {
    try {
      let nonEmptyArray = otp.filter(element => element !== "");
      if (nonEmptyArray.length != 4) {
        Alert.alert('Invalid!', 'Please Enter Valid OTP!');
        return;
      }
      let finalOtp = nonEmptyArray.join('');
      let response = await axiosWithoutToken.post('/auth/studentSignIn', { key: "mpin", mobileNumber: mobileNumber, mpin: finalOtp });
      if (response?.data?.success) {
        await AsyncStorage.setItem('access_Token', response.data.access_Token)
        let token = await AsyncStorage.getItem('access_Token')
        if (token) {
          setUser(true)
        }
      }
    }
    catch (error) {
      showAlert('Error', commonError(error))
    }
  }

  return (
    <View className="flex-1" style={{ backgroundColor: themeColors.bg }}>
      <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
        <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>MPIN</Text>
        <View className='p-2 mt-12'>
          <Text className="text-gray-700 mb-3">Enter your MPIN</Text>
          <OtpInput otp={otp} setOtp={setOtp} />
          <TouchableOpacity activeOpacity={0.9} className="py-3 mt-6 rounded-full" style={{ backgroundColor: themeColors.bg }}
            onPress={handleLogin}>
            <Text className="font-xl text-center text-white">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};