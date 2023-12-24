import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
    const navigation = useNavigation();

    const [mobileNumber, setMobileNumber] = useState('');
    const [name, setName] = useState('');

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
                <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>Sign Up</Text>
                <View className="flex-row justify-center mt-6">
                    <Image source={require('../assets/images/signup/desktop.png')}
                        style={{ width: 250,height: 250 }}
                    />
                </View>
                <View className="form space-y-2 ">
                    <Text className="mb-1" style={{color:themeColors.formHeading}}>Enter your name and mobile number</Text>
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                        style={styles.inputBox}
                        placeholder='Enter Name'
                    />
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3"
                        style={styles.inputBox}
                        placeholder='Enter Mobile Number'
                    />
                    <TouchableOpacity activeOpacity={0.9}
                        className="py-3 mt-6 rounded-full"
                        style={{ backgroundColor: themeColors.bg }}
                        onPress={() => navigation.navigate('StudentRegistrationScreen',
                            {
                                mobileNumber: mobileNumber,
                                name: 'Vishal',
                                action:'SignUp'
                            })}>
                        <Text className="font-xl text-center text-white">
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center py-12">
                    <Text className="text-gray-500 font-bold mb-5" style={{ color: themeColors.bgBold }}>Already have a account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text className="font-bold" style={{ color: themeColors.bg }}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
