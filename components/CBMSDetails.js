import { View, Text, TouchableOpacity, Alert, TextInput, ScrollView } from "react-native";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { SignUpContext } from "../context/signupContext";
import { useContext } from "react";
import DropdownElement from "./DropdownElement";
import styles from "../assets/css/styles";
import signup from "../assets/css/signup";
import { useEffect, useState } from "react";
import { useAxiosWithoutToken } from "../config/axiosConfig";
import { showAlert } from "./UsefulAlerts";
import { commonError } from "../utils/usefulFunctions";

export default function CBMSDetails() {
    const axiosWithoutToken = useAxiosWithoutToken();
    const { signUpData, setSignUpData } = useContext(SignUpContext)
    const navigation = useNavigation();
    const [cbmsData, setCbmsData] = useState({
        boards: [],
        mediums: [],
        classList: [],
        subjects: []
    })

    const handleNext = async () => {
        if (!signUpData.board) {
            Alert.alert('Required!', 'Please Select Board of Education!');
            return;
        }
        if (!signUpData.medium) {
            Alert.alert('Required!', 'Please Select Medium of Education!');
            return;
        }
        if (!signUpData.class) {
            Alert.alert('Required!', 'Please Select your Class!');
            return;
        }
        if (!signUpData.subject) {
            Alert.alert('Required!', 'Please Select your Subject!');
            return;
        }
        if (!signUpData.teacherId) {
            Alert.alert('Required!', 'Please Enter TeacherId!');
            return;
        }
        try {
            let response = await axiosWithoutToken.get(`/student/verifyTeacher?teacherId=${signUpData.teacherId}`);
            if (response?.data?.success) {
                navigation.navigate('TermsAndConditions')
            }
        }
        catch (error) {
            showAlert(commonError(error))
        }
    }

    const fetchcCBMS = async () => {
        try {
            let res = await axiosWithoutToken.get('/teacher/getService');
            if (res?.data?.success) {
                const createOptions = (type) => {
                    const services = res.data.allServices.filter(service => service.type === type);
                    return services.map(item => ({ label: item.name, value: item.name }));
                };
                const optionsB = createOptions('board');
                const optionsM = createOptions('medium');
                const optionsC = createOptions('class');
                const optionsS = createOptions('subject');
                setCbmsData((prevState) => ({
                    ...prevState,
                    boards: optionsB,
                    mediums: optionsM,
                    classList: optionsC,
                    subjects: optionsS,
                }));
            }
        }
        catch (error) {
            console.log('got error in fetching data at line 53 is', error)
        }
    }

    useEffect(() => {
        fetchcCBMS();
    }, [])

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 rounded-t-3xl bg-white">
                <ScrollView className="mt-4">
                    <View className="px-8 pt-8">
                        <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>Sign Up</Text>
                        <View className="form space-y-2 mt-8">
                            <Text style={styles.dropdownHeading}>Class</Text>
                            <DropdownElement data={cbmsData.classList} dataType='class' />

                            <Text style={styles.dropdownHeading} >Board</Text>
                            <DropdownElement data={cbmsData.boards} dataType='board' />

                            <Text style={styles.dropdownHeading} >Medium</Text>
                            <DropdownElement data={cbmsData.mediums} dataType='medium' />

                            <Text style={styles.dropdownHeading}>Subject</Text>
                            <DropdownElement data={cbmsData.subjects} dataType='subject' />

                            <Text style={signup.teacherIdLabel}>Teacher Id</Text>
                            <TextInput
                                className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                                style={styles.inputBox}
                                onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, teacherId: text }))}
                                placeholder='Enter Teacher Id...'
                            />

                            <TouchableOpacity activeOpacity={0.9}
                                onPress={handleNext}
                                className="py-3 rounded-full"
                                style={{ backgroundColor: themeColors.bg }}>
                                <Text className="font-xl text-center text-white">
                                    Next
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}