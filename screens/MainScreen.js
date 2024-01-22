import React, { useContext } from "react";
import { View, TouchableOpacity, StatusBar,Text,Image } from "react-native";
import { UserContext } from "../context/userContext";
import { themeColors } from "../theme";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import homeIcon from '../assets/icons/homeIcon.png';
import examIcon from '../assets/icons/examsIcon.png';
import profileIcon from '../assets/icons/profileIcon.png';
import moreIcon from '../assets/icons/moreIcon.png';
import homeFocused from '../assets/icons/homeFocused.png';
import examFocused from '../assets/icons/examFocused.png';
import profileFocused from '../assets/icons/profileFocused.png';
import moreFocused from '../assets/icons/moreFocused.png';
import mainStyle from "../assets/css/mainStyle";
import ExamsScreen from "./ExamsScreen";
import MoreScreen from "./MoreScreen";
import LogoTitle from "../components/LogoTitle";
import HomeScreenStack from "../navigation/homeScreenStacks";
import HeaderRight from "../components/headerRight/HeaderRight";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

const commonHeaderOptions = {
  headerTitle: '',
  headerBackVisible: false,
  headerTitle: (props) => <LogoTitle {...props} />,
  headerRight: () => (
    <HeaderRight
      onNotificationPress={() => console.log('Notification icon pressed')}
      onSharePress={() => console.log('Share icon pressed')}
    />
  ),
  headerStyle: {
    backgroundColor: themeColors.bg,
  },
};

const CustomTabBar = ({ state, descriptors, navigation }) => {

  const iconMapping = {
    Home: { default: homeIcon, focused: homeFocused },
    Exams: { default: examIcon, focused: examFocused },
    Profile: { default: profileIcon, focused: profileFocused },
    More: { default: moreIcon, focused: moreFocused },
  };

  return (
    <View style={mainStyle.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.9}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={mainStyle.tabItem}
          >
            <Image
              source={isFocused ? iconMapping[route.name].focused : iconMapping[route.name].default}
              style={{
                width: 35, 
                height: 35,
                resizeMode: 'contain', 
              }}
            />
            {isFocused && <View style={mainStyle.activeTabIndicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};


export default function MainScreen() {

  return (
    <View style={{ flex: 1 }}>
       <StatusBar style="light" />
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreenStack}
          options={{
            tabBarIcon: { name: 'home', size: 20 },
            // ...commonHeaderOptions,
            headerShown:false
          }}
        />
        <Tab.Screen
          name="Exams"
          component={ExamsScreen}
          options={{
            tabBarIcon: { name: 'home', size: 20 },
            ...commonHeaderOptions,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: { name: 'home', size: 20 },
            ...commonHeaderOptions,
          }}
        />
        <Tab.Screen
          name="More"
          component={MoreScreen}
          options={{
            tabBarIcon: { name: 'home', size: 20 },
            ...commonHeaderOptions,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}