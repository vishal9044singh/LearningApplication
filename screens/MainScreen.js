import React, { useContext} from "react";
import { View, TouchableOpacity, StatusBar } from "react-native";
import { UserContext } from "../context/userContext";
import { themeColors } from "../theme";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import mainStyle from "../assets/css/mainStyle";
import HomeScreen from "./HomeScreen";
import ExamsScreen from "./ExamsScreen";
import MoreScreen from "./MoreScreen";
import LogoTitle from "../components/LogoTitle";
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
  return (
    <View style={mainStyle.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const icon = options.tabBarIcon;
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
            <Ionicons
              name={icon.name}
              size={icon.size}
              color={isFocused ? '#2f95dc' : '#ccc'}
            />
            {isFocused && <View style={mainStyle.activeTabIndicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};


export default function MainScreen() {

  const { user, setUser } = useContext(UserContext);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: { name: 'home', size: 24 },
            ...commonHeaderOptions,
          }}
        />
        <Tab.Screen
          name="Exams"
          component={ExamsScreen}
          options={{
            tabBarIcon: { name: 'home', size: 24 },
            ...commonHeaderOptions,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: { name: 'home', size: 24 },
            ...commonHeaderOptions,
          }}
        />
        <Tab.Screen
          name="More"
          component={MoreScreen}
          options={{
            tabBarIcon: { name: 'home', size: 24 },
            ...commonHeaderOptions,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}