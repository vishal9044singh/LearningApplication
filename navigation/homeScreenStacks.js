import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import HomeScreen from "../screens/HomeScreen";
import { useNavigation } from "@react-navigation/native";
import LogoTitle from "../components/LogoTitle";
import { themeColors } from "../theme";
import NotificationsScreen from "../screens/NotificationsScreen";
import LessonQuestions from "../components/lessonExams/LessonQuestions";
import HeaderRight from "../components/headerRight/HeaderRight";
import CustomBackButton from "../components/CustomBack";
import ReviewExam from "../components/reviewExam/ReviewExam";

const Stack = createStackNavigator();

export default function HomeScreenStack() {
    const navigation = useNavigation();

    const commonHeaderOptions = {
        headerTitle: (props) => <LogoTitle {...props} />,
        headerBackVisible: false,
        headerRight: () => (
            <HeaderRight
                onNotificationPress={() => navigation.navigate('NotificationsScreen')}
                onSharePress={() => console.log('Share icon pressed')}
            />
        ),
        headerStyle: {
            backgroundColor: themeColors.bg,
        },
    };

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: themeColors.bg },
                headerShadowVisible: false,
            }}>
            <Stack.Screen
                name="HomeScreen"
                options={{
                    tabBarIcon: { name: 'home', size: 24 },
                    ...commonHeaderOptions,
                }}
                component={HomeScreen}
            />
            <Stack.Screen
                name="VideoPlayer"
                options={{
                    ...commonHeaderOptions,
                    headerLeft: (props) => <CustomBackButton {...props} />,
                    headerTitleAlign: 'center',
                }}
                component={VideoPlayer}
            />
            <Stack.Screen
                name="NotificationsScreen"
                options={{
                    ...commonHeaderOptions,
                    headerLeft: (props) => <CustomBackButton {...props} />,
                    headerTitleAlign: 'center',
                }}
                component={NotificationsScreen}
            />
            <Stack.Screen
                name="LessonQuestions"
                options={{
                    ...commonHeaderOptions,
                    headerLeft: (props) => <CustomBackButton {...props} />,
                    headerTitleAlign: 'center',
                }}
                component={LessonQuestions}
            />
            <Stack.Screen
                name='ReviewExam'
                options={{
                    tabBarIcon: { name: 'home', size: 24 },
                    ...commonHeaderOptions,
                }}
                component={ReviewExam}
            />
        </Stack.Navigator>
    );
};