import { StyleSheet } from "react-native";
import { themeColors } from "../../theme";

export default examsStyle = StyleSheet.create({
    marksheetCard: {
        height: 120,
        width: '100%',
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: 'white',
        borderRadius: 10,
        boxShadow: '20px 0 20px rgba(255, 255, 255, 0.5)',
        elevation: 5
    },
    fileIcon: {
        height:'60%',
        width:60,
        marginRight:10,
    },
    rightBox: {
        padding:10,
    },
    downloadTitle:{
        marginBottom:10,
        fontSize:16,
        color:themeColors.bgBold,
        fontWeight:"bold"
    },
    downloadBtn:{
        backgroundColor:themeColors.bg,
        padding:10,
        borderRadius:50,
        alignItems:'center',
        justifyContent:"center"
    },
    downloadText:{
        color:'white',
        fontWeight:500
    }
})
