import { createContext, useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { themeColors } from "../theme";

export const InternetContext = createContext();
export const InternetContextProvider = ({ children }) => {
    const [internet, setInternet] = useState(true);

    const onRetryPress = () => {

    }

    return (
        <InternetContext.Provider value={{ internet, setInternet }}>
            {
                !internet ?
                    <View style={styles.container}>
                        <Feather name="wifi-off" size={64} color={themeColors.bg} style={styles.icon} />
                        <Text style={styles.title}>No Internet!</Text>
                        <Text style={styles.subtitle}>Something's wrong with your connection. Please check and try again.</Text>
                        <TouchableOpacity onPress={onRetryPress} style={styles.retryButton} activeOpacity={0.9}>
                            <Text style={styles.retryButtonText}>Retry</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    children
            }
        </InternetContext.Provider>
    )
}
export const useInternet = () => {
    return useContext(InternetContext);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: themeColors.bg,
    },
    subtitle: {
        fontSize: 15,
        textAlign: 'center',
        color: themeColors.formHeading,
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    retryButton: {
        marginTop: 20,
    },
    retryButtonText: {
        color: themeColors.bg,
        fontSize: 18,
        textDecorationLine: 'underline',
    },
});
