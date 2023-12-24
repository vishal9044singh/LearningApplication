import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import signup from "../assets/css/signup";
import { useContext } from "react";
import { SignUpContext } from "../context/signupContext";
import { themeColors } from "../theme";

export default function Address() {
    const navigation = useNavigation();
    const { signUpData, setSignUpData } = useContext(SignUpContext)

    const handleNext = () => {
        if (!signUpData.address.line1) {
            Alert.alert('Required!', 'Address Line1 is Required Field!');
            return;
        }
        if (!signUpData.address.line2) {
            Alert.alert('Required!', 'Address Line2 is Required Field!');
            return;
        }
        if (!signUpData.address.city) {
            Alert.alert('Required!', 'City is Required Field!');
            return;
        }
        if (!signUpData.address.district) {
            Alert.alert('Required!', 'District is Required Field!');
            return;
        }
        if (!signUpData.address.state) {
            Alert.alert('Required!', 'State is Required Field!');
            return;
        }
        if (!signUpData.address.country) {
            Alert.alert('Required!', 'Country is Required Field!');
            return;
        }
        if (!signUpData.address.pincode) {
            Alert.alert('Required!', 'Pincode is Required Field!');
            return;
        }
        navigation.navigate('MPin')
    }

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
                        onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, address: { ...prevData.address, line1: text } }))}
                        placeholder='Line 1'
                    />
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3"
                        style={styles.inputBox}
                        onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, address: { ...prevData.address, line2: text } }))}
                        placeholder='Line 2'
                    />
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                        style={styles.inputBox}
                        onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, address: { ...prevData.address, city: text } }))}
                        placeholder='City'
                    />
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                        style={styles.inputBox}
                        onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, address: { ...prevData.address, district: text } }))}
                        placeholder='District'
                    />
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                        style={styles.inputBox}
                        onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, address: { ...prevData.address, state: text } }))}
                        placeholder='State'
                    />
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                        style={styles.inputBox}
                        onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, address: { ...prevData.address, country: text } }))}
                        placeholder='Country'
                    />
                    <TextInput
                        className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                        style={styles.inputBox}
                        keyboardType="numeric"
                        onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, address: { ...prevData.address, pincode: text } }))}
                        placeholder='Pincode'
                    />
                    <TouchableOpacity activeOpacity={0.9}
                        onPress={handleNext}
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