import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useRef, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { themeColors } from '../theme';
import styles from '../assets/css/styles';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../context/userContext';
import login from '../assets/css/login';

export default function LoginScreen() {
  const navigation = useNavigation();
  const mobileNuberRef = useRef(null);
  const mpinRef = useRef(null);
  const { setUser } = useContext(UserContext)

  return (
    <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
      <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
        <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>Login</Text>
        <View className="flex-row justify-center">
          <Image source={require('../assets/student.png')}
            style={{ width: 250, height: 250 }}
          />
        </View>
        <View className="form space-y-2">
          <Text className="text-gray-700 mb-1">Enter your mobile number</Text>
          <TextInput
            className="p-2 text-gray-700 rounded-md mb-4"
            style={styles.inputBox}
            placeholder='Mobile Number'
          />
          <TouchableOpacity activeOpacity={0.9} className="py-3 mt-6 rounded-full" style={{ backgroundColor: themeColors.bg }} 
           onPress={()=>navigation.navigate('OtpScreen')}
           >
            <Text className="font-xl text-center text-white">
              Login
            </Text>
          </TouchableOpacity>
        </View>

        {/* here i want a horzontal line with or at the center */}
        <View style={login.horizontalLineContainer}>
          <View style={login.horizontalLine} />
          <Text style={login.orText}>or</Text>
        </View>

        <View className='mt-3' style={login.mpin}>
          <Entypo name="key" size={24} color={themeColors.bg} />
          <TouchableOpacity onPress={()=>navigation.navigate('MpinScreen')} activeOpacity={0.9}>
          <Text className='font-bold' style={{ color: themeColors.bg }}> Login With MPIN</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center py-12">
          <Text className="text-gray-500 font-bold mb-5" style={{ color: themeColors.bgBold }}>Don't have a account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')} activeOpacity={0.9}>
            <Text className="font-bold" style={{ color: themeColors.bg }}> Sign Up Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}