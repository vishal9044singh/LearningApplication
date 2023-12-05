import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useRef, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../context/userContext'


export default function LoginScreen() {
  const navigation = useNavigation();
  const mobileNuberRef = useRef(null);
  const mpinRef = useRef(null);
  const { setUser } = useContext(UserContext)

  return (
    <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>

      <SafeAreaView className="flex ">
        <View className="flex-row justify-start">
        </View>
        <View className="flex-row justify-center">
          <Image source={require('../assets/images/login.png')}
            style={{ width: 200, height: 200 }} />
        </View>
      </SafeAreaView>

      <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-8 pt-8">
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Mobile Number</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="Enter Mobile Number..."
            keyboardType="numeric"
            ref={mobileNuberRef}
          />
          <Text className="text-gray-700 ml-4">MPIN</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            secureTextEntry
            keyboardType="numeric"
            placeholder="Enter MPIN..."
            ref={mpinRef}
          />
          <TouchableOpacity className="flex items-end" onPress={() => navigation.navigate('ResetMpinScreen')}>
            <Text className="text-gray-700 mb-5">Forgot MPIN?</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl" onPress={() => setUser(true)}>
            <Text className="text-xl font-bold text-center text-gray-700" >Login</Text>
          </TouchableOpacity>

        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text className="font-semibold text-yellow-500"> Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>

  )
}