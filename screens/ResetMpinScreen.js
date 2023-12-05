import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function ResetMpinScreen() {
  const navigation = useNavigation();

  const mobileNumberRef = useRef(null);
  const otpRef = useRef(null);
  const setMpinRef = useRef(null);
  const confirmMpinRef = useRef(null);

  const [step, setStep] = useState(1); // Track the current step

  const handleSendOtp = () => {
    // TODO: Implement OTP sending logic and verification
    // For now, let's simulate OTP verification
    const isOtpVerified = true;

    if (isOtpVerified) {
      setStep(step + 1); // Move to the next step
    } else {
      // Handle unsuccessful OTP verification
    }
  };

  const handleResetMpin = () => {
    // TODO: Implement MPIN reset logic
    // For now, let's just navigate to the next screen
    navigation.navigate('Login');
  };

  return (
    <ScrollView className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
        </View>
        <View className="flex-row justify-center">
          <Image source={require('../assets/images/login.png')}
            style={{ width: 200, height: 200 }} />
        </View>
      </SafeAreaView>
      <View style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50, minHeight: 500}} className="flex-1 bg-white px-8 pt-8">
        <View className="form">
          <View style={{ backgroundColor: 'lightblue', padding: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
            <Text className="text-gray-700 text-xl font-bold">Step 1: Enter Mobile Number</Text>
          </View>
          {step === 1 && (
            <View style={{ borderWidth: 0.5, borderColor: 'lightgrey' }}>
              <Text className="text-gray-700 ml-4 mt-2">Let's start by entering you registered mobile number to get a Otp!</Text>
              <TextInput
                className="p-3 bg-gray-100 text-gray-700 rounded-2xl m-2"
                placeholder="Enter Mobile Number..."
                keyboardType="numeric"
                ref={mobileNumberRef}
              />
              <TouchableOpacity onPress={handleSendOtp} className="py-3 bg-yellow-400 rounded-xl m-2">
                <Text className="text-xl font-bold text-center text-gray-700">Send Otp</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={{ marginTop: 20, backgroundColor: 'lightblue', padding: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
            <Text className="text-gray-700 text-xl font-bold">Step 2: Verify Otp</Text>
          </View>
          {step === 2 && (
            <View style={{ borderWidth: 0.5, borderColor: 'lightgrey' }} >
              <Text className="text-gray-700 ml-4 mt-2">Otp has been sent to you registered mobile number!</Text>
              <TextInput
                className="p-3 bg-gray-100 text-gray-700 rounded-2xl m-2"
                secureTextEntry
                keyboardType="numeric"
                placeholder="Enter Otp..."
                ref={otpRef}
              />
              <TouchableOpacity onPress={handleSendOtp} className="py-3 bg-yellow-400 rounded-xl m-2">
                <Text className="text-xl font-bold text-center text-gray-700">Verify OTP</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={{ marginTop: 20, backgroundColor: 'lightblue', padding: 5, borderTopRightRadius: 5, borderTopLeftRadius: 5 }}>
            <Text className="text-gray-700 text-xl font-bold">Step 3: Update Mpin</Text>
          </View>
          {step === 3 && (
            <View style={{ borderWidth: 0.5, borderColor: 'lightgrey' }} >
              <Text className="text-gray-700 ml-4 mt-2">Enter your new Mpin!</Text>
              <TextInput
                className="p-3 bg-gray-100 text-gray-700 rounded-2xl m-2"
                secureTextEntry
                keyboardType="numeric"
                placeholder="Enter MPIN..."
                ref={setMpinRef}
              />
              <Text className="text-gray-700 ml-4 mt-2">Confirm your new Mpin!</Text>
              <TextInput
                className="p-3 bg-gray-100 text-gray-700 rounded-2xl mt-2 m-2"
                secureTextEntry
                keyboardType="numeric"
                placeholder="Confirm MPIN..."
                ref={confirmMpinRef}
              />
              <TouchableOpacity onPress={handleResetMpin} className="py-3 bg-yellow-400 rounded-xl m-2 mb-5">
                <Text className="text-xl font-bold text-center text-gray-700">Update MPIN</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
