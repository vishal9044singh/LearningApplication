import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { themeColors } from "../theme";
import { useContext } from "react";
import signup from "../assets/css/signup";
import { useNavigation } from "@react-navigation/native";
import { SignUpContext } from "../context/signupContext";
import styles from "../assets/css/styles";

export default function EmailElement() {
    const { signUpData, setSignUpData } = useContext(SignUpContext);
    const navigation = useNavigation();

    const handleNext = () => {
        try {
            if (!signUpData.emailId) {
                Alert.alert('Reqired!', 'Email is required.');
                return;
            } else if (!/\S+@\S+\.\S+/.test(signUpData.emailId)) {
                Alert.alert('Invalid Email!', 'Please Enter Valid Email!');
                return;
            }
            navigation.navigate('Address')
        }
        catch (error) {
            console.log('Got error in setting emailId')
        }
    }

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
                <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>Sign Up</Text>
                <View className="form space-y-2 mt-16">
                    <Text className='mb-2 font-medium' style={signup.enterAddress}>Enter your Email Id</Text>
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-md mb-4 font-medium "
                        style={styles.inputBox}
                        onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, emailId: text }))}
                        placeholder='Email Id'
                    />
                    <TouchableOpacity activeOpacity={0.9}
                        className="py-3 mt-6 rounded-full"
                        style={{ backgroundColor: themeColors.bg }}
                        onPress={handleNext}
                    // onPress={() => navigation.navigate('Address', {

                    // })}
                    >
                        <Text className="font-xl text-center text-white">
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}