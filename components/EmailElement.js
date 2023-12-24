import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import signup from "../assets/css/signup";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import styles from "../assets/css/styles";

export default function EmailElement() {
    const route = useRoute();
    const navigation = useNavigation();
    const { mobileNumber, name } = route.params;
    console.log('value of mobilenumber and name is',mobileNumber,name)
    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
        <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
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
                    style={{ backgroundColor: themeColors.bg }}
                    onPress={()=>navigation.navigate('Address',{
                        
                    })}
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