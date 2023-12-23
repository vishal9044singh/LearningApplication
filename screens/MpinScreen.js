import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { themeColors } from '../theme';
import OtpInput from '../components/OtpInput';

export default function MpinScreen() {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleLogin = () => {
    console.log('value of otp is', otp)
    //here will send reques to backed and if verified will navigate to next screen
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