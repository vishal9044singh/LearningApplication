import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { themeColors } from '../theme';
import { Image} from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { UserContext } from '../context/userContext';
import MpinScreen from '../screens/MpinScreen';
import OtpScreen from '../screens/OtpScreen';
import Email from '../components/EmailElement';
import Address from '../components/Address';
import Mpin from '../components/Mpin';
import ConfirmMpin from '../components/ConfirmMpin';
import CBMSDetails from '../components/CBMSDetails';
import CustomBackButton from '../components/CustomBack';
import TermsAndConditions from '../components/TermsAndConditions';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {

  const LogoTitle = () => {
    return (
      <Image
        style={{ width: 35, height: 35 }}
        source={require('../assets/logo/topLogo/desktop.png')} // Replace with the path to your logo
        resizeMode="contain"
      />
    );
  };

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setUser(false)
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{ headerStyle: { backgroundColor: themeColors.bg }, 
      headerShadowVisible: false ,
      headerLeft: (props) => <CustomBackButton {...props} />,
      }}>
        {!user ? (
          <>
            <Stack.Screen name="Login" options={{
              headerTitle: '',
              headerBackVisible: false,
              headerTitle: (props) => <LogoTitle {...props} />,
              headerTitleAlign: 'center',
              headerLeft: null,
            }} component={LoginScreen} />
            <Stack.Screen name="SignUp" options={{
              headerTitle: '',
              headerBackVisible: false,
              headerTitle: (props) => <LogoTitle {...props} />,
              headerLeft: null,
              headerTitleAlign: 'center',
            }} component={SignUpScreen} />
            <Stack.Screen name="MpinScreen" options={{ headerTitle: '' }} component={MpinScreen} />
            <Stack.Screen name="OtpScreen" options={{ headerTitle: '' }} component={OtpScreen} />
            <Stack.Screen name="Email" options={{ headerTitle: '' }} component={Email} />
            <Stack.Screen name="MPin" options={{ headerTitle: '' }} component={Mpin} />
            <Stack.Screen name="ConfirmMpin" options={{ headerTitle: '' }} component={ConfirmMpin} />
            <Stack.Screen name="TermsAndConditions" options={{ headerTitle: '' }} component={TermsAndConditions} />
            <Stack.Screen name="Address" options={{ headerTitle: '' }} component={Address} />
            <Stack.Screen name="CBMSDetails" options={{ headerTitle: '' }} component={CBMSDetails} />
          </>
        ) : (
          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}