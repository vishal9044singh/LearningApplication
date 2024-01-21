import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import { themeColors } from "../../theme";
import { useEffect, useState } from "react";
import Checkbox from "expo-checkbox";
import { axiosWithoutToken } from '../../config/axiosConfig';
import { showAlert } from "../UsefulAlerts";
import { commonError } from '../../utils/usefulFunctions';

export default function LessonQuestions({ route }) {
    let { videoData } = route.params;
    let questions = videoData.lessonExam.questions;
    const [lessonQuestions, setLessonQuestions] = useState(questions);
    const [currentQuestion, setCurrentQuestions] = useState(0)
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [textAnswer, setTextAnswer] = useState('')

    const handleNext = async (isLastQuestion) => {
        console.trace('value of is lastQuestion', isLastQuestion)
        let updatedQuestions = [...lessonQuestions];
        if (selectedOptions.length > 0) {
            updatedQuestions[currentQuestion].options.forEach((option, index) => {
                option.isSelected = selectedOptions.includes(index);
            });
        } else {
            updatedQuestions[currentQuestion].inputAnswer = textAnswer.trim();
        }
        if (!!isLastQuestion) {
            // console.log('This is last question of input Text',updatedQuestions)
            try{
                console.log('value of exam id at line', videoData.lessonExam.examId)
                console.log('value of videoId at line', videoData.videoId)
                let response = await axiosWithoutToken.post('/student/generateScoreCard', { updatedQuestions: updatedQuestions, examId: videoData.lessonExam.examId, videoId: videoData.videoId });
                console.log('Got response at line 29 is', response.data)
                if (response?.data?.success) {
                    showAlert(commonError(error));
                }
            }
            catch(error){
                showAlert(commonError(error));
                console.log('Got error at line 35 is',error)
            }
            //here we will send request to backed to save the questions array
        }
        else {
            setLessonQuestions(updatedQuestions);
            setSelectedOptions([]);
            setTextAnswer('');
            setCurrentQuestions(currentQuestion + 1);
        }
    }

    const handleSubmit = () => {
        console.log('This is Last question')
    }

    const handleOptionSelect = (index) => {
        const newSelectedOptions = [...selectedOptions];
        const selectedIndex = newSelectedOptions.indexOf(index);
        if (selectedIndex === -1) {
            newSelectedOptions.push(index);
        } else {
            newSelectedOptions.splice(selectedIndex, 1);
        }
        setSelectedOptions(newSelectedOptions);
    };

    const renderQuestionType = (question) => {
        if (question.type === 'mcq') {
            return question.options.map((option, index) => (
                <View key={index} style={styles.options}>
                    <Checkbox
                        style={styles.checkbox}
                        value={selectedOptions.includes(index)}
                        onValueChange={() => handleOptionSelect(index)}
                        color={selectedOptions.includes(index) ? 'green' : undefined}
                    />
                    <Text style={styles.optionContent}>{option.option}</Text>
                </View>
            ));
        } else {
            return (
                <View style={styles.textContainer}>
                    <TextInput
                        style={styles.textInput}
                        multiline
                        numberOfLines={6}
                        value={textAnswer}
                        onChangeText={(newText) => setTextAnswer(newText)}
                        placeholder="Type your answer here..."
                    />
                </View>
            );
        }
    };

    useEffect(() => {
        let questions = videoData.lessonExam.questions
        setLessonQuestions(questions)
    }, [])

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
                        <Text style={styles.currentQuestion}>{currentQuestion + 1}</Text>
                        <Text style={styles.totalQuestions}>/{lessonQuestions.length}</Text>
                    </View>
                </View>

                <ScrollView>
                    <View style={styles.questionCard}>
                        <Text style={styles.questionText}>{`${currentQuestion + 1}. ${lessonQuestions[currentQuestion].content}`}</Text>
                        {renderQuestionType(lessonQuestions[currentQuestion])}
                    </View>
                    {
                        !(currentQuestion + 1 === questions.length) ? (
                            <TouchableOpacity
                                disabled={!selectedOptions.length && !textAnswer.trim()}
                                style={[
                                    styles.button,
                                    { backgroundColor: !selectedOptions.length && !textAnswer.trim() ? 'lightgrey' : themeColors.bg },
                                ]}
                                activeOpacity={0.9}
                                onPress={()=>handleNext(false)}
                            >
                                <Text style={styles.btnText}>Next</Text>
                            </TouchableOpacity>
                        ) : (
                                <TouchableOpacity
                                    disabled={!selectedOptions.length && !textAnswer.trim()}
                                    style={[styles.button, { backgroundColor: !selectedOptions.length && !textAnswer.trim() ? 'lightgrey' : themeColors.bg },
                                    ]}
                                    activeOpacity={0.9}
                                    onPress={()=>handleNext(true)}
                                >
                                <Text style={styles.btnText}>Submit</Text>
                            </TouchableOpacity>
                        )
                    }
                </ScrollView>

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
    textContainer: {
        flex: 1,
        paddingHorizontal: 10,
        marginBottom: 10
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    optionContent: {
        marginLeft: 5,
        fontSize: 12,
        color: themeColors.formHeading
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
    questionText: {
        fontWeight: 500,
        margin: 10,
        fontSize: 15,
        color: themeColors.bgBold
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
        borderRadius: 40,
        marginBottom: 70,
    },
    options: {
        flexDirection: 'row',
        margin: 10,
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
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        boxShadow: '20px 0 20px rgba(255, 255, 255, 0.5)',
    },
})