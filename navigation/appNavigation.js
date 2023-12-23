import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { themeColors } from '../theme';
import { Image } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { UserContext } from '../context/userContext';
import MpinScreen from '../screens/MpinScreen';
import OtpScreen from '../screens/OtpScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {

  const LogoTitle = () => {
    return (
      <Image
        style={{ width: 35, height: 35 }}
        source={require('../assets/student.png')} // Replace with the path to your logo
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
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: themeColors.bg }, headerShadowVisible: false }}>
        {!user ? (
          <>
            <Stack.Screen name="Login" options={{
              headerTitle: '',
              headerBackVisible: false,
              headerTitle: (props) => <LogoTitle {...props} />,
              headerTitleAlign: 'center',
            }} component={LoginScreen} />
            <Stack.Screen name="SignUp" options={{
              headerTitle: '',
              headerBackVisible: false,
              headerTitle: (props) => <LogoTitle {...props} />,
              headerTitleAlign: 'center',
            }} component={SignUpScreen} />
            <Stack.Screen name="MpinScreen" options={{ headerTitle: '' }} component={MpinScreen} />
            <Stack.Screen name="OtpScreen" options={{ headerTitle: '' }} component={OtpScreen} />
          </>
        ) : (
          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}