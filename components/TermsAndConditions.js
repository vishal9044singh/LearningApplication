import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Checkbox from 'expo-checkbox';
import { useState } from "react";
import { themeColors } from "../theme";
import signup from "../assets/css/signup";
import styles from "../assets/css/styles";

export default function TermsAndConditions() {
    const [isChecked, setChecked] = useState(false);
    return (
        <>
            <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>Terms And Conditions</Text>
            <View className="form space-y-2 mt-6">
                <Text className='mb-2 font-medium' style={signup.enterAddress}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur aliquet nunc nec mi volutpat, luctus sagittis nulla elementum.
                    Donec iaculis nulla eget orci consectetur ultrices.
                    Nam mattis magna quis lectus sagittis porttitor.
                    Morbi suscipit fermentum libero dignissim fermentum.
                    Aenean convallis, quam vel ultrices convallis, justo tortor euismod risus, quis efficitur mauris est at enim.
                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    Integer et porttitor turpis.
                </Text>
                <Text className='mb-2 font-medium' style={signup.enterAddress}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur aliquet nunc nec mi volutpat, luctus sagittis nulla elementum.
                    Donec iaculis nulla eget orci consectetur ultrices.
                    Nam mattis magna quis lectus sagittis porttitor.
                    Morbi suscipit fermentum libero dignissim fermentum.
                    Aenean convallis, quam vel ultrices convallis, justo tortor euismod risus, quis efficitur mauris est at enim.
                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </Text>
                <View style={signup.checkbox}>
                    <Checkbox
                        style={styles.checkbox}
                        color={isChecked ? themeColors.bg : undefined}
                        value={isChecked}
                        onValueChange={setChecked} />
                    <Text style={signup.checkboxText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </View>
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