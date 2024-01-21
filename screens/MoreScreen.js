import { View, Text, Image, TouchableOpacity, Animated, Alert } from "react-native";
import { useRef, useEffect, useContext } from "react";
import { themeColors } from "../theme";
import { UserContext } from "../context/userContext";
import moreStyle from "../assets/css/moreStyle";
import logoutIcon from '../assets/icons/logoutIcon.png';
import subscriptionIcon from '../assets/icons/subscriptionIcon.png';
import certificatesIcon from '../assets/icons/certificatesIcon.png'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MoreScreen() {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const { setUser } = useContext(UserContext)

    const handleLogout = async () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Logout canceled'),
                    style: 'cancel',
                },
                {
                    text: 'Logout',
                    onPress: async () => {
                        await AsyncStorage.removeItem('access_Token');
                        let token = await AsyncStorage.getItem('access_Token');
                        console.log('Value of token after deletion is', token);
                        setUser(false);
                    },
                    style: 'destructive',
                },
            ],
            { cancelable: true }
        );
    };

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 2,
                duration: 1000, // Adjust the duration as needed
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim]);
    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 rounded-t-3xl bg-white">
                <View style={moreStyle.styledContainer} >
                    <Animated.View style={{ ...moreStyle.styledSubContainer, opacity: fadeAnim }}>

                        <View style={moreStyle.userDetails}>
                            <Image source={{ uri: 'https' }} style={moreStyle.profileImage} />
                            <View style={moreStyle.notificationContent}>
                                <Text style={moreStyle.name}>Vishal Singh</Text>
                                <Text style={moreStyle.userId}>#123456789</Text>
                            </View>
                        </View>

                        <View style={moreStyle.menu}>

                            <Text style={moreStyle.menuHeading}>Menu</Text>
                            <View style={moreStyle.line} />
                            <TouchableOpacity style={moreStyle.menuItem} activeOpacity={0.6}>
                                <Image source={certificatesIcon} style={moreStyle.icon} />
                                <Text style={moreStyle.menuText}>Certificate</Text>
                            </TouchableOpacity>
                            <View style={moreStyle.line} />

                            <TouchableOpacity style={moreStyle.menuItem} activeOpacity={0.6}>
                                <Image source={subscriptionIcon} style={moreStyle.icon} />
                                <Text style={moreStyle.menuText}>Subscription</Text>
                            </TouchableOpacity>
                            <View style={moreStyle.line} />

                            <TouchableOpacity style={moreStyle.menuItem} activeOpacity={0.6} onPress={handleLogout}>
                                <Image source={logoutIcon} style={moreStyle.icon} />
                                <Text style={moreStyle.menuText}>Logout</Text>
                            </TouchableOpacity>
                            <View style={moreStyle.line} />

                        </View>
                        <Text style={moreStyle.versionId}>Version-1.25</Text>
                    </Animated.View>

                </View>
            </View>
        </View>
    )
}