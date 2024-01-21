import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { themeColors } from '../theme';
import styles from '../assets/css/styles';
import { axiosWithoutToken } from '../config/axiosConfig';
import { commonError } from '../utils/usefulFunctions';
import { useNavigation } from '@react-navigation/native';
import { showAlert } from '../components/UsefulAlerts';
import login from '../assets/css/login';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [mobileNumber,setMobileNumber]=useState('');

  const hitSendOtp = async () => {
    if (mobileNumber.length != 10) {
      showAlert('Alert', 'Please Enter Valid Mobile Number!');
      return;
    }
    try {
      let response = await axiosWithoutToken.post('/auth/sendOtp', { mobileNumber: mobileNumber, role: 'student' });
      if (response?.data?.success) {
        navigation.navigate('OtpScreen', { mobileNumber: mobileNumber, action: 'Login' });
      }
    }
    catch (error) {
      showAlert('Alert!', commonError(error))
    }
  }

  const handleMpinLogin = () => {
    if (mobileNumber.length != 10) {
      showAlert('Invalid!', 'Please Enter Valid Mobile Number!');
      return;
    }
    navigation.navigate('MpinScreen', { mobileNumber: mobileNumber, action: 'Login' });
  }
  

  return (
    <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
      <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
        <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>Login</Text>
        <View className="flex-row justify-center mt-5">
        <Image source={require('../assets/images/login/desktop.png')}
            style={{ width: 250, height: 250 }}
          />
        </View>
        <View className="form space-y-2 mt-4">
          <Text className="mb-1" style={{color:themeColors.formHeading}}>Enter your mobile number</Text>
          <TextInput
            className="p-2 text-gray-700 rounded-md mb-4"
            style={styles.inputBox}
            maxLength={10}
            onChangeText={(text) => setMobileNumber(text)}
            placeholder='Mobile Number'
          />
          <TouchableOpacity activeOpacity={0.9} className="py-3 mt-6 rounded-full" style={{ backgroundColor: themeColors.bg }}
            onPress={hitSendOtp}>
            <Text className="font-xl text-center text-white">
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View style={login.horizontalLineContainer}>
          <View style={login.horizontalLine} />
          <Text style={login.orText}>or</Text>
        </View>

        <View className='mt-3' style={login.mpin}>
          <Entypo name="key" size={24} color={themeColors.bg} />
          <TouchableOpacity onPress={handleMpinLogin} activeOpacity={0.9}>
            <Text className='font-bold' style={{ color: themeColors.bg }}> Login With MPIN</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center py-8">
          <Text className="text-gray-500 font-bold" style={{ color: themeColors.bgBold }}>Don't have a account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')} activeOpacity={0.9}>
            <Text className="font-bold" style={{ color: themeColors.bg }}> Sign Up Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}