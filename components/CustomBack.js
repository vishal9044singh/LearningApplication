import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image } from 'react-native';
import { Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SignUpContext } from '../context/signupContext';

export default function CustomBackButton() {
    const navigation = useNavigation();
    const route = useRoute();
    const { clearSignUpData } = useContext(SignUpContext)

    const navigateToSignUp = () => {
        clearSignUpData();
        navigation.navigate('SignUp')
    }

    const handleBack = () => {
        try {
            if (route.name == 'Email') {
                Alert.alert('Alert!', 'Are you sure you want to Quit Registration', [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: navigateToSignUp
                    },
                ]);
            }
            else {
                navigation.goBack()
            }
        }
        catch (error) {
            console.log('got error in backbutotn', error)
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={handleBack}>
            <Image source={require('../assets/icons/arrowLeft/desktop.png')} style={{ width: 15, height: 15, marginLeft: 10 }} />
        </TouchableOpacity>
    );
};
