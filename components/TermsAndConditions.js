import { Text, View, TextInput, TouchableOpacity,Alert } from "react-native";
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, useContext } from "react";
import { themeColors } from "../theme";
import signup from "../assets/css/signup";
import { SignUpContext } from '../context/signupContext';
import {UserContext} from '../context/userContext';
import styles from "../assets/css/styles";

export default function TermsAndConditions() {
    const [isChecked, setChecked] = useState(false);
    const [termsText, setTermsText] = useState('')
    const { signUpData, setSignUpData } = useContext(SignUpContext);
    const { user, setUser } = useContext(UserContext)

    const handleContinue=()=>{
        try{
            if(!isChecked){
                Alert.alert('Reqired!', 'Please Accept the Terms And Conditions');
                return;
            }
            setUser(true)
        }
        catch(error){
            console.log('Got error in sending request in terms and condtions')
        }
    }


    useEffect(()=>{
        (async function(){
            try{
                //here we will set terms and coditions which is fetched from api
                let token = await AsyncStorage.getItem('access_Token');
            }
            catch(error){
                console.log('Got error in fetching Terms and conditons');
            }
        })()
    },[])

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
                <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>Terms And Conditions</Text>
                <View className="form space-y-2 mt-6">
                    <Text className='mb-2 font-medium' style={signup.enterAddress}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur aliquet nunc nec mi volutpat, luctus sagittis nulla elementum.
                        Donec iaculis nulla eget orci consectetur ultrices.
                        Nam mattis magna quis lectus sagittis porttitor.
                        Morbi suscipit fermentum libero dignissim fermentum.
                        Aenean convallis, quam vel ultrices convallis, justo tortor euismod risus, quis efficitur mauris est at enim.
                        Interdum et malesuada fames ac ante ipsum primis in faucibus.
                        Integer et porttitor turpis.
                    </Text>
                    <Text className='mb-2 font-medium' style={signup.enterAddress}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur aliquet nunc nec mi volutpat, luctus sagittis nulla elementum.
                        Donec iaculis nulla eget orci consectetur ultrices.
                        Nam mattis magna quis lectus sagittis porttitor.
                        Morbi suscipit fermentum libero dignissim fermentum.
                        Aenean convallis, quam vel ultrices convallis, justo tortor euismod risus, quis efficitur mauris est at enim.
                        Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </Text>
                    <View style={signup.checkbox}>
                        <Checkbox
                            style={styles.checkbox}
                            color={isChecked ? themeColors.bg : undefined}
                            value={isChecked}
                            onValueChange={setChecked} />
                        <Text style={signup.checkboxText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.9}
                    onPress={handleContinue}
                        className="py-3 mt-6 rounded-full"
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