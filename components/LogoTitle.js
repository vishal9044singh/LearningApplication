import { Image} from 'react-native';

export default function LogoTitle() {
    return (
        <Image
            style={{ width: 35, height: 35 }}
            source={require('../assets/logo/topLogo/desktop.png')}
            resizeMode="contain"
        />
    );
};