import { View, Text, TouchableOpacity,Alert } from "react-native";
import OtpInput from './OtpInput';
import { themeColors } from "../theme";
import { SignUpContext } from "../context/signupContext";
import { useContext,useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ConfirmMpin() {
    const navigation = useNavigation();
    const {signUpData,setSignUpData} =useContext(SignUpContext)
    const [confirmMpin, setConfirmMpin] = useState(['', '', '', '']);

    const handleContinue = () => {
        try {
            let nonEmptyArray = confirmMpin.filter(element => element !== "");
            let finalMpin = nonEmptyArray.join('');
            console.log('value of finalMpin are',finalMpin)
            if (finalMpin != signUpData.mpin) {
                Alert.alert('Invalid!', 'Your MPIN and confirmation MPIN do not match');
                return;
            }
            setSignUpData((prevData) => ({ ...prevData, confirmMpin: finalMpin }))
            navigation.navigate('CBMSDetails');
        }
        catch (err) {
            console.log('got error in setting up Confirmation MPIN', err)
        }
    }

    return (
        <View className="flex-1" style={{ backgroundColor: themeColors.bg }}>
        <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
            <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>SignUp</Text>
            <View className='p-2 mt-12'>
                <Text className="text-gray-700 mb-3">Re-enter the MPIN</Text>
                <OtpInput otp={confirmMpin} setOtp={setConfirmMpin} />
                <TouchableOpacity activeOpacity={0.9} className="py-3 mt-6 rounded-full" style={{ backgroundColor: themeColors.bg }}
                    onPress={handleContinue}>
                    <Text className="font-xl text-center text-white">Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )
}