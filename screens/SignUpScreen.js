import React, {useContext} from 'react'
import { View, Text, TouchableOpacity, Image, TextInput,Alert} from 'react-native';
import { themeColors } from '../theme';
import { SignUpContext } from '../context/signupContext'
import { useNavigation } from '@react-navigation/native';
import { showAlert } from '../components/UsefulAlerts';
import { commonError } from '../utils/usefulFunctions';
import { axiosWithoutToken } from '../config/axiosConfig';

export default function SignUpScreen() {
    const navigation = useNavigation();
    const { signUpData, setSignUpData, clearSignUpData } = useContext(SignUpContext)

    const handleNext = async () => {
        console.log('Going to at line 15')
        try {
            if (!signUpData.name) {
                Alert.alert('Required!', 'Name is Required!');
                return;
            }
            if (signUpData.mobileNumber.length != 10) {
                Alert.alert('Alert!', 'Please Enter Valid Mobile Number');
                return;
            }
            let response = await axiosWithoutToken.post('/auth/signUpSendOtp', { mobileNumber: signUpData.mobileNumber })
            console.log('value of response of signup si',response.data)
            if (response?.data?.success) {
                navigation.navigate('OtpScreen', { action: 'SignUp' })
            }
        }
        catch (error) {
            console.log('got error at line 30 is', error)
            showAlert('Alert', commonError(error))
        }
    }

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
                <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>Sign Up</Text>
                <View className="flex-row justify-center mt-6">
                    <Image source={require('../assets/images/signup/desktop.png')}
                        style={{ width: 250, height: 250 }}
                    />
                </View>
                <View className="form space-y-2 ">
                    <Text className="mb-1" style={{ color: themeColors.formHeading }}>Enter your name and mobile number</Text>
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                        style={styles.inputBox}
                        onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, name: text }))}
                        value={signUpData.name}
                        placeholder='Enter Name'
                    />
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3"
                        style={styles.inputBox}
                        value={signUpData.mobileNumber}
                        onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, mobileNumber: text }))}
                        placeholder='Enter Mobile Number'
                    />
                    <TouchableOpacity activeOpacity={0.9}
                        className="py-3 mt-6 rounded-full"
                        style={{ backgroundColor: themeColors.bg }}
                        onPress={handleNext}
                    // onPress={() => navigation.navigate('OtpScreen',{action:'SignUp'})}
                    >
                        <Text className="font-xl text-center text-white">Next</Text>
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
