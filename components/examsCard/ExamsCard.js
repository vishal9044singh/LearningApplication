import { View, Text, Image, TouchableOpacity } from "react-native";
import examsStyle from "../../assets/css/examsStyle";

export default function ExamsCard() {

    return (
        <View style={examsStyle.lessonExamCard}>
            <View style={examsStyle.examCardHeader}>
                <TouchableOpacity style={examsStyle.lessonBtn}>
                    <Text style={examsStyle.lessonExamText}>Lesson Exam</Text>
                </TouchableOpacity>
                <Text style={examsStyle.lessonExamText}>Lesson No-1</Text>
            </View>

            <View style={examsStyle.examCardBody}>
                <View style={examsStyle.myMarks}>
                    <Text>His</Text>
                </View>
                <View style={examsStyle.wrongAns}>
                    <Text>New</Text>
                </View>
                <View style={examsStyle.correctAns}>
                    <Text>Check</Text>
                </View>
            </View>

            <View style={examsStyle.examCardFooter}>
                <TouchableOpacity style={examsStyle.playVideoBtn} activeOpacity={0.8}>
                    <Image source={require('../../assets/icons/examPlayBtn.png')} style={examsStyle.playButton} />
                    <Text style={examsStyle.playNowText}>Play Now</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}