import { View, Text, TouchableOpacity, Image, TextInput, ScrollView,StyleSheet } from 'react-native';
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

// subscribe for more videos like this :)
export default function SignUpScreen() {
    const navigation = useNavigation();
    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
                <Text className='text-center text-2xl font-bold' style={{color:themeColors.bgBold}}>Sign Up</Text>
                <View className="flex-row justify-center">
                    <Image source={require('../assets/student.png')}
                        style={{ width: 250, height: 250 }} 
                        />
                </View>
                <View className="form space-y-2 ">
                    <Text className="text-gray-700 mb-1">Enter your name and mobile number</Text>
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                        style={styles.inputBox}
                        // value="john snow"
                        placeholder='Enter Name'
                    />
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3"
                        style={styles.inputBox}
                        // value="john@gmail.com"
                        placeholder='Enter Mobile Number'
                    />
                    <TouchableOpacity activeOpacity={0.9}
                        className="py-3 mt-6 rounded-full"
                        style={{backgroundColor:themeColors.bg}}
                        // onPress={()=>navigation.navigate('OtpScreen')}
                    >
                        <Text className="font-xl text-center text-white">
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center py-12">
                    <Text className="text-gray-500 font-bold mb-5" style={{color:themeColors.bgBold}}>Don't have a account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text className="font-bold" style={{ color: themeColors.bg }}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
