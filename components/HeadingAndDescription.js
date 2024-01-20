import { StyleSheet, View, Text } from "react-native";
import { themeColors } from "../theme";

export default function HeadingAndDescription() {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>This is heading of the video</Text>
            <Text style={styles.content}>This will be subheading of the video This will be subheading of the video.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
        padding: 5
    },
    title: {
        color: themeColors.bgBold,
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 2
    },
    content: {
        fontSize: 12,
        color: themeColors.formHeading
    },
});