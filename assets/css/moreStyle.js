import { StyleSheet } from "react-native";
import { themeColors } from "../../theme";

export default moreStyle = StyleSheet.create({
    styledContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: themeColors.bgBold,
        height: '92%',
        width: '80%',
        borderTopRightRadius: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        alignItems: "center",
        elevation: 5,
    },
    styledSubContainer:{
        width: '75%',
        height:'100%'
    },
    userDetails: {
        flexDirection: "row",
        height: '22%',
        marginLeft: -5,
        justifyContent: "center",
        alignItems: "center"
    },
    menu: {
        height: '58%',
    },
    notificationContent: {
        flex: 1,
        alignItems: 'flex-start',
    },
    name: {
        fontSize: 18,
        color: 'white',
        fontWeight: 500
    },
    userId: {
        fontSize: 12,
        color: themeColors.formHeading
    },
    profileImage: {
        width: 80,
        height: 80,
        backgroundColor: 'cyan',
        borderRadius: 50,
        marginRight: 10,
    },
    menuHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    menuText: {
        fontSize: 14,
        color: '#FFF',
    },
    line: {
        height: 1,
        backgroundColor: themeColors.moreLine,
        marginVertical: 10,
    },
    versionId: {
        color: themeColors.moreText
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
})