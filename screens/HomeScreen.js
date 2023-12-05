import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { UserContext } from "../context/userContext";
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  const { user, setUser } = useContext(UserContext);
  const handleLogout = () => {
    setUser(false);
    console.log('value of user is', user)
  }
  return (
    <SafeAreaView>
      <Text>This is Home Screen</Text>
      <Button title='Logout' onPress={handleLogout} />
    </SafeAreaView>
  )
}