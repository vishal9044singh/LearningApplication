import { View, Text, StyleSheet, Image,ScrollView } from "react-native";
import { themeColors } from "../../theme";
import { useEffect, useState } from "react";

export default function ReviewExam({route}) {
    // let { videoId } = route.params
    const [questionsList, setQuestionsList] = useState([]);

    // const renderQuestionType = (question) => {
    //     if (question.type === 'mcq') {
    //         return question.options.map((option, index) => (
    //             <View key={index} style={styles.options}>
    //                 <Checkbox
    //                     style={styles.checkbox}
    //                     value={selectedOptions.includes(index)}
    //                     onValueChange={() => handleOptionSelect(index)}
    //                     color={selectedOptions.includes(index) ? 'green' : undefined}
    //                 />
    //                 <Text style={styles.optionContent}>{option.option}</Text>
    //             </View>
    //         ));
    //     } else {
    //         return (
    //             <View style={styles.textContainer}>
    //                 <TextInput
    //                     style={styles.textInput}
    //                     multiline
    //                     numberOfLines={6}
    //                     value={textAnswer}
    //                     onChangeText={(newText) => setTextAnswer(newText)}
    //                     placeholder="Type your answer here..."
    //                 />
    //             </View>
    //         );
    //     }
    // };

    const fetchStudentScore = async () => {
        try {
             
        }
        catch (error) {
            console.log('Got Error in fetching StudentsScore', score)
        }
    }

    useEffect(() => {
        //here we will fetch student score based on videoId
        fetchStudentScore()
    }, [])

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 px-6 pt-4 rounded-t-3xl" style={{ backgroundColor: themeColors.formBg }}>
                <Text style={styles.heading}>Review Exam</Text>

                <View style={styles.reviewCardContainer}>
                    <Image source={require('../../assets/icons/reviewExamCard.png')} style={styles.reviewExamCard} />
                    <View style={styles.marksContainer}>
                        <Text style={styles.myMarksText}>My Marks</Text>
                        <View style={styles.score}>
                            <Text style={styles.obtained}>15</Text>
                            <Text style={styles.total}>/20</Text>
                        </View>
                    </View>
                </View>

                <ScrollView>
                    <View style={styles.questionCard}>
                        <Text style={styles.questionText}>This is Question</Text>
                        {/* <Text style={styles.questionText}>{`${currentQuestion + 1}. ${lessonQuestions[currentQuestion].content}`}</Text> */}
                        {/* {renderQuestionType(lessonQuestions[currentQuestion])} */}
                    </View>
                </ScrollView>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
        color: themeColors.bgBold,
    },
    questionText: {
        fontWeight: 500,
        margin: 10,
        fontSize: 15,
        color: themeColors.bgBold
    },
    questionCard: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        boxShadow: '20px 0 20px rgba(255, 255, 255, 0.5)',
    },
    myMarksText: {
        color: 'white',
        fontSize: 15,
        marginTop: 10,
    },
    obtained: {
        marginTop: -10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 50,
    },
    total: {
        color: 'white',
        fontSize: 25,
    },
    score: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    reviewCardContainer: {
        position: 'relative',
    },
    marksContainer: {
        position: 'absolute',
        top: '50%',
        marginTop: -40,
        width: 100,
        marginLeft: 20
    },
    reviewExamCard: {
        height: 100,
        width: '100%',
        marginTop: 10,
        borderRadius: 10,
    },
});