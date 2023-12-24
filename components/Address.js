import { View, Text,Image,TextInput,TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import signup from "../assets/css/signup";
import { themeColors } from "../theme";

export default function Address() {
    const navigation = useNavigation();
    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
        <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
            <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>Sign Up</Text>
            <View className="form space-y-2">
                <View style={signup.location}>
                    <MaterialIcons name="my-location" size={24} color={themeColors.bg} />
                    <Text> Confirm Your Location</Text>
                </View>
                <Text style={signup.enterAddress}>Enter your Address</Text>
                <TextInput
                    className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                    style={styles.inputBox}
                    placeholder='Line 1'
                />
                <TextInput
                    className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3"
                    style={styles.inputBox}
                    placeholder='Line 2'
                />
                <TextInput
                    className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                    style={styles.inputBox}
                    placeholder='City'
                />
                <TextInput
                    className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                    style={styles.inputBox}
                    placeholder='District'
                />
                <TextInput
                    className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                    style={styles.inputBox}
                    placeholder='State'
                />
                <TextInput
                    className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                    style={styles.inputBox}
                    placeholder='Country'
                />
                <TextInput
                    className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                    style={styles.inputBox}
                    keyboardType="numeric"
                    placeholder='Pincode'
                />
                <TouchableOpacity activeOpacity={0.9}
                onPress={()=>navigation.navigate('MPin')}
                    className="py-3 mt-6 rounded-full"
                    style={{ backgroundColor: themeColors.bg }}>
                    <Text className="font-xl text-center text-white">
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}