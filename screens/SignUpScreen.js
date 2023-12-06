import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

// subscribe for more videos like this :)
export default function SignUpScreen() {
    const navigation = useNavigation();
    return (
        <ScrollView className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <SafeAreaView className="flex">
                <View className="flex-row justify-center">
                    <Image source={require('../assets/images/signup.png')}
                        style={{ width: 165, height: 110 }} />
                </View>
            </SafeAreaView>
            <View className="flex-1 bg-white px-8 pt-8"
                style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
            >
                <View className="form space-y-2">
                    <Text className="text-gray-700 ml-4">Full Name:</Text>
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                        // value="john snow"
                        placeholder='Enter Name...'
                    />
                    <Text className="text-gray-700 ml-4">Mobile Number:</Text>
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                        // value="john@gmail.com"
                        placeholder='Enter Mobile Number...'
                    />
                    <Text className="text-gray-700 ml-4">Email Address:</Text>
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                        // value="john@gmail.com"
                        placeholder='Enter Email'
                    />
                    <Text className="text-gray-700 ml-4">Address:</Text>
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-2xl mb-1"
                        // value="test12345"
                        placeholder='Line 1...'
                    />
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-2xl mb-1"
                        // value="test12345"
                        placeholder='Line 2...'
                    />
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-2xl mb-1"
                        // value="test12345"
                        placeholder='City...'
                    />
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-2xl mb-1"
                        // secureTextEntry
                        // value="test12345"
                        placeholder='Dist...'
                    />
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-2xl mb-1"
                        // value="test12345"
                        placeholder='State...'
                    />
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-2xl mb-1"
                        // value="test12345"
                        placeholder='Country...'
                    />
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-2xl mb-1"
                        // value="test12345"
                        placeholder='Pincode...'
                    />
                    <TouchableOpacity
                        className="py-4 bg-yellow-400 rounded-xl"
                    >
                        <Text className="font-xl font-bold text-center text-gray-700">
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center mt-7">
                    <Text className="text-gray-500 font-semibold mb-5">Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text className="font-semibold text-yellow-500"> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
