import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { StyleSheet } from "react-native";
import { SignUpContext } from '../context/signupContext';
import { useContext } from 'react';
import { themeColors } from '../theme';

export default function DropdownElement({ data,dataType }) {
    const { signUpData, setSignUpData } = useContext(SignUpContext)
    return (
        <Dropdown
            style={dropdownStyle.dropdown}
            placeholderStyle={dropdownStyle.placeholderStyle}
            selectedTextStyle={dropdownStyle.selectedTextStyle}
            iconStyle={dropdownStyle.iconStyle}
            iconColor={themeColors.bg}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            onChange={item => {
                setSignUpData((prevData) => ({ ...prevData, [dataType]:item.value }))
            }}
        />
    )
}

const dropdownStyle = StyleSheet.create({
    dropdown: {
        backgroundColor: 'white',
        elevation: 5,
        height: 50,
        marginBottom: 20,
        padding: 5,
        borderRadius: 5
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
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