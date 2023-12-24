import { View, Text, TouchableOpacity,Alert } from "react-native";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { SignUpContext } from "../context/signupContext";
import { useContext } from "react";
import DropdownElement from "./DropdownElement";
import styles from "../assets/css/styles";
import { useEffect, useState } from "react";

export default function CBMSDetails() {
    const { signUpData } = useContext(SignUpContext)
    const navigation = useNavigation();
    const [cbmsData, setCbmsData] = useState({
        boards: [],
        mediums: [],
        classList: [],
        subjects: []
    })

    const handleNext=()=>{
        try{
            if(!signUpData.board){
                Alert.alert('Required!', 'Please Select Board of Education!');
                return;
            }
            if(!signUpData.medium){
                Alert.alert('Required!', 'Please Select Medium of Education!');
                return;
            }
            if(!signUpData.class){
                Alert.alert('Required!', 'Please Select your Class!');
                return;
            }
            if(!signUpData.subject){
                Alert.alert('Required!', 'Please Select your Subject!');
                return;
            }
            navigation.navigate('TermsAndConditions')
        }
        catch(err){

        }
    }

    useEffect(() => {
        (async function () {
            //api to get details for available 
            try {
                let apiBoards =  [{ label: 'CBSE', value: 'CBSE' },{ label: 'UP', value: 'UP' }];
                let apiMediums = [{ label: 'Hindi', value: 'Hindi' },{ label: 'English', value: 'English' }];
                let apiClasses =  [{ label: '1', value: '1' },{ label: '2', value: '2' }];
                let apiSubjects =  [{ label: 'Science', value: 'Science' },{ label: 'Maths', value: 'Maths' }];
                setCbmsData((prevData) => ({ ...prevData, boards: apiBoards, mediums: apiMediums, classList: apiClasses, subjects: apiSubjects }))
            }
            catch (error) {
                console.log('Got Error in CBMSDetails', error)
            }
        })()
    }, [])

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
                <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>Sign Up</Text>
                <View className="form space-y-2 mt-8">

                    <Text style={styles.dropdownHeading}>Class</Text>
                    <DropdownElement data={cbmsData.classList} dataType='class' />

                    <Text style={styles.dropdownHeading} >Board</Text>
                    <DropdownElement data={cbmsData.boards} dataType='board' />

                    <Text style={styles.dropdownHeading} >Medium</Text>
                    <DropdownElement data={cbmsData.mediums} dataType='medium' />

                    <Text style={styles.dropdownHeading}>Subject</Text>
                    <DropdownElement data={cbmsData.subjects} dataType='subject'/>

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
        </View>
    )
}