import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import { themeColors } from '../theme';
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
import LogoTitle from '../components/LogoTitle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {

  const { user, setUser } = useContext(UserContext);
  console.log('value of user at line 25 is',user)

  // const LogoTitle = () => {
  //   return (
  //     <Image
  //       style={{ width: 35, height: 35 }}
  //       source={require('../assets/logo/topLogo/desktop.png')} // Replace with the path to your logo
  //       resizeMode="contain"
  //     />
  //   );
  // };

  const isUserExists = async () => {
    let token = await AsyncStorage.getItem('access_Token');
    if (token) {
      setUser(true)
    }
    else {
      setUser(false)
    }
  }

  useEffect(() => {
    isUserExists()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{ headerStyle: { backgroundColor: themeColors.bg }, 
      headerShadowVisible: false ,
      headerLeft: (props) => <CustomBackButton {...props} />,
      }}
      >
        {!user ? (
          <>
            <Stack.Screen name="Login" 
            options={{
              headerTitle: '',
              headerBackVisible: false,
              headerTitle: (props) => <LogoTitle {...props} />,
              headerTitleAlign: 'center',
              headerLeft: null,
            }} 
            component={LoginScreen} />

            <Stack.Screen name="SignUp" options={{
              headerTitle: '',
              headerBackVisible: false,
              headerTitle: (props) => <LogoTitle {...props} />,
              headerLeft: null,
              headerTitleAlign: 'center',
            }} component={SignUpScreen} />

            <Stack.Screen name="MpinScreen" options={{
               headerTitle: '',
              headerBackVisible: false,
              headerTitle: (props) => <LogoTitle {...props} />,
              headerTitleAlign: 'center',
               }} component={MpinScreen} />

            <Stack.Screen name="OtpScreen" options={{
               headerTitle: '',
              headerBackVisible: false,
              headerTitle: (props) => <LogoTitle {...props} />,
              headerTitleAlign: 'center',
               }} component={OtpScreen} />

            <Stack.Screen name="Email" options={{ 
              headerTitle: '',
              headerBackVisible: false,
              headerTitle: (props) => <LogoTitle {...props} />,
              headerTitleAlign: 'center',
          }} component={Email} />

            <Stack.Screen name="MPin" options={{
              headerTitle: '',
              headerBackVisible: false,
              headerTitle: (props) => <LogoTitle {...props} />,
              headerTitleAlign: 'center',
               }} component={Mpin} />

            <Stack.Screen name="ConfirmMpin" 
            options={{
               headerTitle: '',
               headerBackVisible: false,
               headerTitle: (props) => <LogoTitle {...props} />,
               headerTitleAlign: 'center',
               }}
               component={ConfirmMpin} />

            <Stack.Screen name="Address" options={{
              headerTitle: '',
              headerBackVisible: false,
              headerTitle: (props) => <LogoTitle {...props} />,
              headerTitleAlign: 'center',
            }} component={Address} />

            <Stack.Screen name="CBMSDetails" options={{
              headerTitle: '',
              headerBackVisible: false,
              headerTitle: (props) => <LogoTitle {...props} />,
              headerTitleAlign: 'center',
            }} component={CBMSDetails} />

            <Stack.Screen name="TermsAndConditions" options={{
              headerTitle: '',
              headerBackVisible: false,
              headerTitle: (props) => <LogoTitle {...props} />,
              headerTitleAlign: 'center',
            }}
              component={TermsAndConditions} />
          </>
        ) : (
          <Stack.Screen name="MainScreen" options={{ headerShown: false }} component={MainScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}