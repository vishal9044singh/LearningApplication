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
    changeMpinContainer:{
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10
    },
    location:{
        flexDirection:"row",alignItems:"center",
        marginBottom:5
    },
    userInputContainer:{
        alignItems:"center"
    },
    labels:{
        fontWeight:"bold",
        color:'black'
    },
    keyIcon:{
        marginRight:5,
        height:20,
        width:20
    },
    changeMpinText:{
        color:'white'
    },
    changeMpinButton: {
        backgroundColor: themeColors.bg,
        width: '90%',
        height: 40,
        borderRadius: 50,
        flexDirection:'row',
        justifyContent: "center",
        alignItems: "center"
    },
    inputBox: {
        height:50,
        color:themeColors.formHeading,
        backgroundColor: themeColors.inputBackground,
        elevation: 5,
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