import { StyleSheet } from "react-native";

export default otpStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    box: {
        width: 45,
        height: 45,
        textAlign: 'center',
        fontSize: 15,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 5
    },
    otpText:{
        flexDirection:'row',
        marginTop:20,
    }
})