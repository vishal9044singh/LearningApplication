import React from 'react';
import { View, TextInput } from 'react-native';
import otpStyle from '../assets/css/otpStyle';

export default function OtpInput({ otp, setOtp }) {
  const inputs = [];

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value === '' && index > 0) {
      inputs[index - 1].focus();
    } else if (value && index < newOtp.length - 1) {
      inputs[index + 1].focus();
    }
  };

  return (
    <View style={otpStyle.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={otpStyle.box}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(value) => handleOtpChange(value, index)}
          value={digit}
          ref={(input) => {
            inputs[index] = input;
          }}
        />
      ))}
    </View>
  );
};