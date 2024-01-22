import { StyleSheet } from "react-native";
import { themeColors } from "../../theme";

export default mainStyle = StyleSheet.create({
    tabBarContainer: {
        backgroundColor: themeColors.bg, 
        position: 'relative',
        zIndex: 1, 
        elevation:10
    },
    tabBar: {
        flexDirection: 'row',
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20,
        backgroundColor: '#FFFFFF',
        elevation: 8,
        overflow: 'visible', 
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2, 
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor:'lightgrey'
    },
    activeTabIndicator: {
        height: 3,
        width: '60%',
        borderRadius:10,
        backgroundColor: themeColors.bg,
        position: 'absolute',
        top: 0,
    },
})