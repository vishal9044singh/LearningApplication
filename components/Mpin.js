import { View, Text, TouchableOpacity } from "react-native";
import OtpInput from './OtpInput';
import { themeColors } from "../theme";
import { useState } from "react";

export default function Mpin() {
    const [otp, setOtp] = useState('')
    return (
        <>
            <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>MPIN</Text>
            <View className='p-2 mt-12'>
                <Text className="text-gray-700 mb-3">Enter your MPIN</Text>
                <OtpInput otp={otp} setOtp={setOtp} />
                <TouchableOpacity activeOpacity={0.9} className="py-3 mt-6 rounded-full" style={{ backgroundColor: themeColors.bg }}
                >
                    <Text className="font-xl text-center text-white">Login</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}