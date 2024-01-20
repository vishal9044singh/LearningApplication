import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { themeColors } from "../../theme";
import { useState } from "react";

export default function LessonQuestions() {

    const [lessonQuestions, setLessonQuestions] = useState([]);

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 px-6 pt-6 rounded-t-3xl" style={{ backgroundColor: themeColors.formBg }}>
                <View style={styles.questionHeader}>
                    <Text></Text>
                    <View style={styles.timerContainer}>
                        <Image source={require('../../assets/icons/stopWatchIcon.png')} style={styles.stopWatch} />
                        <Text style={styles.couter}>10:20:50</Text>
                    </View>
                    <View style={styles.questionContainer}>
                        <Text style={styles.currentQuestion}>2</Text>
                        <Text style={styles.totalQuestions}>/20</Text>
                    </View>
                </View>
                <View style={styles.questionCard}>

                </View>
                <TouchableOpacity style={styles.button} activeOpacity={0.9}>
                    <Text style={styles.btnText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    questionHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20,
    },
    timerContainer: {
        height: 30,
        width: 100,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themeColors.bgBold
    },
    couter: {
        fontWeight: 500,
        color: 'white',
    },
    button: {
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: themeColors.bg,
        height: 45,
        borderRadius: 40
    },
    stopWatch: {
        height: 15,
        width: 15,
        marginRight: 2
    },
    questionContainer: {
        flexDirection: 'row'
    },
    totalQuestions: {
        fontWeight: 500,
        color: themeColors.bgBold
    },
    currentQuestion: {
        fontWeight: 500,
        color: themeColors.bg,
    },
    btnText: {
        color: 'white'
    },
    questionCard: {
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
})