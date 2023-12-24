import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useContext } from "react";
import OtpInput from './OtpInput';
import { themeColors } from "../theme";
import { useState } from "react";
import { SignUpContext } from "../context/signupContext";
import { useNavigation } from "@react-navigation/native";

export default function Mpin() {
    const navigation = useNavigation();
    const { signUpData, setSignUpData } = useContext(SignUpContext)
    const [mpin, setMpin] = useState(['', '', '', '']);

    const handleContinue = () => {
        console.log('value of signUpData at line 12 is')
        try {
            let nonEmptyArray = mpin.filter(element => element !== "");
            if (nonEmptyArray.length != 4) {
                Alert.alert('Invalid!', 'Please Enter Valid MPIN!');
                return;
            }
            let finalMpin = nonEmptyArray.join('');
            setSignUpData((prevData) => ({ ...prevData, mpin: finalMpin }))
            navigation.navigate('ConfirmMpin');
        }
        catch (err) {
            console.log('got error in setting up Mpin', err)
        }
    }

    return (
        <View className="flex-1" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
                <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>Sign Up</Text>
                <View className='p-2 mt-12'>
                    <Text className="text-gray-700 mb-3">Enter the MPIN</Text>
                    <OtpInput otp={mpin} setOtp={setMpin} />
                    <TouchableOpacity activeOpacity={0.9} className="py-3 mt-8 rounded-full" style={{ backgroundColor: themeColors.bg }}
                        onPress={handleContinue}>
                        <Text className="font-xl text-center text-white">Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}