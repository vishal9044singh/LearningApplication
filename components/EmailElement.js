import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import signup from "../assets/css/signup";
import styles from "../assets/css/styles";

export default function EmailElement() {
    return (
        <>
            <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>Sign Up</Text>
            <View className="form space-y-2 mt-16">
                <Text className='mb-2 font-medium' style={signup.enterAddress}>Enter your Email Id</Text>
                <TextInput
                    className="p-2 bg-gray-100 text-gray-700 rounded-md mb-4 font-medium "
                    style={styles.inputBox}
                    placeholder='Email Id'
                />
                <TouchableOpacity activeOpacity={0.9}
                    className="py-3 mt-6 rounded-full"
                    style={{ backgroundColor: themeColors.bg }}>
                    <Text className="font-xl text-center text-white">
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}