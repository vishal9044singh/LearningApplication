import { StyleSheet } from "react-native";

export default mainStyle = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        elevation: 8,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    activeTabIndicator: {
        height: 3,
        width: '80%',
        backgroundColor: 'red',
        position: 'absolute',
        top: 0,
    },
})