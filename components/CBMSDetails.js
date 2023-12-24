import { View, Text, TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import DropdownElement from "./DropdownElement";
import styles from "../assets/css/styles";

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

export default function CBMSDetails() {
    
    const navigation = useNavigation();

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
                <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>Sign Up</Text>
                <View className="form space-y-2 mt-8">

                    <Text style={styles.dropdownHeading}>Class</Text>
                    <DropdownElement data={data} />

                    <Text style={styles.dropdownHeading} >Board</Text>
                    <DropdownElement data={data} />

                    <Text style={styles.dropdownHeading} >Medium</Text>
                    <DropdownElement data={data} />

                    <Text style={styles.dropdownHeading}>Subject</Text>
                    <DropdownElement data={data} />

                    <TouchableOpacity activeOpacity={0.9}
                        onPress={() => navigation.navigate('TermsAndConditions')}
                        className="py-3 rounded-full"
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