import { View, Text, TouchableOpacity } from "react-native";
import OtpInput from './OtpInput';
import { themeColors } from "../theme";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ConfirmMpin() {
    const navigation = useNavigation();
    const [otp, setOtp] = useState(['', '', '', '']);

    const handleContinue = () => {
        navigation.navigate('CBMSDetails')
    }

    return (
        <View className="flex-1" style={{ backgroundColor: themeColors.bg }}>
        <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
            <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>Verification</Text>
            <View className='p-2 mt-12'>
                <Text className="text-gray-700 mb-3">Enter the OTP you received</Text>
                <OtpInput otp={otp} setOtp={setOtp} />
                <View style={otpStyle.otpText}>
                    <Text className="text-gray-700">You should receive the otp in</Text>
                    <Text style={{ color: themeColors.bg }}> 30 Second</Text>
                </View>
                <TouchableOpacity activeOpacity={0.9} className="py-3 mt-6 rounded-full" style={{ backgroundColor: themeColors.bg }}
                    onPress={handleContinue}>
                    <Text className="font-xl text-center text-white">Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )
}