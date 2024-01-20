import { StyleSheet } from "react-native";
import { themeColors } from "../../theme";

export default examsStyle = StyleSheet.create({
    marksheetCard: {
        height: 120,
        width: '100%',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        borderRadius: 10,
        boxShadow: '20px 0 20px rgba(255, 255, 255, 0.5)',
        elevation: 5
    },
    examCardHeader:{
        flexDirection:'row',
        width:'90%',
        justifyContent:'space-between'
    },
    lessonExamText:{
        color:themeColors.bg,
        fontWeight:500
    },
    examCardBody:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around'
    },
    lessonBtn:{
        borderRadius:50,
        borderColor:themeColors.bgBold,
        borderWidth:1,
        paddingVertical:2,
        paddingHorizontal:5,
    },
    lessonExamCard: {
        height: 120,
        width: '100%',
        flexDirection: 'column',
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: 'white',
        borderRadius: 10,
        boxShadow: '20px 0 20px rgba(255, 255, 255, 0.5)',
        elevation: 5
    },
    fileIcon: {
        height: '60%',
        width: 60,
        marginRight: 10,
    },
    rightBox: {
        padding: 10,
    },
    downloadTitle: {
        marginBottom: 10,
        fontSize: 16,
        color: themeColors.bgBold,
        fontWeight: "bold"
    },
    downloadBtn: {
        backgroundColor: themeColors.bg,
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center"
    },
    examCardFooter: {
        backgroundColor: themeColors.bg,
        width: '90%',
        padding: 10,
        borderRadius: 50
    },
    playVideoBtn: {
        borderRadius: 50,
        width: '80%'
    },
    playNowText: {
        color: 'white'
    },
    playButton: {
        height: 20,
        width: 20,
        marginRight: 5
    },
    downloadText: {
        color: 'white',
        fontWeight: 500
    },
    playVideoBtn: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center'
    }
})
