import React, { useContext, useEffect } from "react";
import { View, Text, Button, Image } from "react-native";
import { UserContext } from "../context/userContext";
import { themeColors } from "../theme";

export default function HomeScreen() {
  const { user, setUser } = useContext(UserContext);

  return (
    <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
      <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
        <Text>This is Home Screen</Text>
      </View>
    </View>
  )
}