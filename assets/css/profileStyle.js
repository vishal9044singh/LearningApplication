import { StyleSheet } from "react-native";
import { themeColors } from "../../theme";

export const profileStyle = StyleSheet.create({
    profileImage: {
        width: 80,
        height: 80,
        backgroundColor: 'cyan',
        borderRadius: 50,
        marginRight: 10,
    },
    userName:{
        color:themeColors.bgBold,
        fontWeight:'bold',
        fontSize:18
    },
    userId:{
        fontSize:10,
        color:themeColors.bg
    },
    cameraIconContainer: {
        position: 'absolute',
        bottom: -2,
        right: -2,
        backgroundColor: 'transparent',
        padding: 10,
      },
      cameraIcon: {
        width: 20, 
        height: 20,
      },
})