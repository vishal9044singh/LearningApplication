import { View, Text } from "react-native";
import { themeColors } from "../theme";

export default function ExamsScreen() {

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
            <Text>This is ExamsScreen</Text>
        </View>
        </View>
    )
}