import { View, StyleSheet,Text,Image, TouchableOpacity } from "react-native";
import { themeColors } from "../../theme";

export default function MonthlyExams() {

    return (
        <View style={styles.container}>
            <View style={styles.examsCard}>
                <View style={styles.contentContainer}>
                    <Text style={styles.heading}>Monthly Exams</Text>
                    <Text style={styles.subHeading}>Lorem ipsum dolor sit amet, consetetur Stet clita kasd gubergren</Text>
                    <TouchableOpacity style={styles.startYourExamBtn} activeOpacity={0.9}>
                        <Text style={styles.startExamText}>Start Your Exam Now</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.pictureContainer}>
                <Image source={require('../../assets/icons/monthlyExamLogo.png')}
                    // onPress={() => playVideo(item.videoUrl)}
                    style={styles.monthlyExamLogo}
                    resizeMode="contain"
                />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: 120,
      width: '100%',
      paddingLeft: 20,
      paddingRight: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    examsCard: {
      height: '100%',
      width: '100%',
      backgroundColor: themeColors.bgBold,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    contentContainer: {
      width: '60%',
      height: '100%',
      padding: 15, 
      justifyContent: 'space-between',
    },
    pictureContainer: {
      width: '40%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading:{
        color:'white',
        fontWeight:"bold",
        fontSize:16
    },
    subHeading:{
        fontSize:10,
        color:themeColors.formHeading
    },
    monthlyExamLogo: {
      height: '90%', 
      width: '90%', 
    },
    startExamText:{
        color:'white',
        fontSize:12
    },
    startYourExamBtn:{
        borderRadius:50,
        width:'80%',
        padding:5,
        backgroundColor:themeColors.bg,
        alignItems:"center"
    }
  });