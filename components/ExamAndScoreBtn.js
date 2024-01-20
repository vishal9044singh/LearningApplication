import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { themeColors } from "../theme";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ExamAndScoreBtn({videoData, status }) {
    console.log('value of videoData at line 7 is',videoData)
    const navigation = useNavigation();
    const [examBtnDisabled, setExamBtnStatus] = useState(false);
    
    const handleVideoWatched = async () => {
        try {
            let response = await axiosWithToken.post('/student/setVideoWatched')
        }
        catch (error) {
            console.log('Got error in setting error')
        }
    }

    const handleGiveExams = () => {
        navigation.navigate('LessonQuestions', { videoData })
    }

    useEffect(() => {
        if (status?.positionMillis >= status?.durationMillis * 0.00 && !examBtnDisabled) {
            setExamBtnStatus(true);
            // handleVideoWatched();
        }
    }, [status, examBtnDisabled]);

    return (
        <View style={styles.examAndScore}>
            <TouchableOpacity disabled={!examBtnDisabled} style={[styles.examBtn, { backgroundColor: examBtnDisabled ? themeColors.bg : 'lightgrey' }]} activeOpacity={0.9} onPress={handleGiveExams}>
                <Text style={styles.btnText}>Go to Exam</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.examBtn, { backgroundColor: themeColors.bgBold }]} activeOpacity={0.9}>
                <Text style={styles.btnText}>View Score</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnText: {
        color: 'white'
    },
    examAndScore: {
        width: "100%",
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    examBtn: {
        width: '48%',
        alignItems: 'center',
        borderRadius: 50,
        padding: 10
    },
});