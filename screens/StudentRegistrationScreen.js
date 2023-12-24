import { View } from 'react-native';
import React from 'react'
import { themeColors } from '../theme';
import EmailElement from '../components/EmailElement';

export default function StudentRegistrationScreen() {

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
                <EmailElement />
            </View>
        </View>
    );
}
