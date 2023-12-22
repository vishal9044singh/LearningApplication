import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { themeColors } from '../theme';
import { Image } from 'react-native';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ResetMpinScreen from '../screens/ResetMpinScreen';
import { UserContext } from '../context/userContext';

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

  const { user } = useContext(UserContext);
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
            <Stack.Screen name="ResetMpinScreen" component={ResetMpinScreen} />
          </>
        ) : (
          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}