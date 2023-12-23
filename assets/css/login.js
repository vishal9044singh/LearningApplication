import { StyleSheet } from "react-native";
import { themeColors } from "../../theme";

export default login = StyleSheet.create({
    mpin:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    horizontalLineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
        position: 'relative',
      },
      horizontalLine: {
        flex: 1,
        height: 2,
        backgroundColor: '#ddd',
      },
      orText: {
        backgroundColor: 'white',
        paddingHorizontal: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: themeColors.bgBold,
        position: 'absolute',
        zIndex: 1,
      }
})