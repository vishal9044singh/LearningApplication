import { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { themeColors } from "../../theme";
import { Dropdown } from "react-native-element-dropdown";

export default function FilterExams() {

    const [data,setData]=useState([]);

    const renderIcon = () => (
        <View style={dropdownStyle.iconContainer}>
            <Image source={require('../../assets/icons/greenTick.png')} style={dropdownStyle.iconImage} />
        </View>
    );

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
        renderAccessory={renderIcon}
        // onChange={item => {
        //     setSignUpData((prevData) => ({ ...prevData, [dataType]: item.value }))
        // }}
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
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconImage: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 14,
        color:themeColors.formHeading
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