import { StyleSheet } from "react-native";

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
        color: '#004260',
        position: 'absolute',
        zIndex: 1,
      },
})