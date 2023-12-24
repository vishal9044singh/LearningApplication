import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image } from 'react-native';

export default function CustomBackButton() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()}>
            <Image source={require('../assets/icons/arrowLeft/desktop.png')} style={{ width: 15, height: 15, marginLeft: 10 }} />
        </TouchableOpacity>
    );
};