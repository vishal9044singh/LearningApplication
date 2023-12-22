import { StyleSheet } from "react-native";
import { themeColors } from "../../theme";

export default signup = StyleSheet.create({
    location:{
        flexDirection:'row',
         justifyContent:"center",
         alignItems:'center',
         marginTop:15,
         marginBottom:15
    },
    enterAddress:{
        color:'#727380'
    },
    checkbox: {
        marginTop:10,
        marginBottom:10,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center'
    },
    checkboxText:{
        fontSize:12,
        marginLeft:4,
        color:themeColors.bgBold
    }
})