import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ResetMpinScreen from '../screens/ResetMpinScreen';
import { UserContext } from '../context/userContext';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const { user } = useContext(UserContext);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#877dfa' }, headerShadowVisible: false }}>
        {!user ? (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ResetMpinScreen" component={ResetMpinScreen} />
          </>
        ) : (
          <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}