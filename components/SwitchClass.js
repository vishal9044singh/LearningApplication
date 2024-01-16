import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { StyleSheet,View } from "react-native";
import { themeColors } from '../theme';

export default function SwitchClass({ data, dataType }) {
    console.log('inside switch class')
    return (
        <View style={dropdownStyle.container}>

        <Dropdown
            style={dropdownStyle.dropdown}
            placeholderStyle={dropdownStyle.placeholderStyle}
            selectedTextStyle={dropdownStyle.selectedTextStyle}
            iconStyle={dropdownStyle.iconStyle}
            iconColor='white'
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Switch Class"
            // onChange={item => {
            //     setSignUpData((prevData) => ({ ...prevData, [dataType]: item.value }))
            // }}
        />
        </View>
    )
}

const dropdownStyle = StyleSheet.create({
    container:{
        width:'50%'
    },
    dropdown: {
        backgroundColor: themeColors.bg,
        elevation: 5,
        height: 45,
        marginBottom: 20,
        padding: 20,
        borderRadius: 50,
    },
    icon: {
        marginRight: 0,
        color:'white'
    },
    placeholderStyle: {
        fontSize: 16,
        color:'white'
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});