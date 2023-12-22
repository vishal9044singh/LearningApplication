import React, { useContext, useEffect } from "react";
import { View, Text, Button, Image } from "react-native";
import { UserContext } from "../context/userContext";
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  const { user, setUser } = useContext(UserContext);
  const handleLogout = () => {
    setUser(false);
    console.log('value of user is', user)
  }

  return (
    <View>
      <Text>This is HomeScreen</Text>
    </View>
  )
}