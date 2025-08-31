import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StatsScreen from "./statsScreen";
import SettingsScreen from "./settings";
import WalletScreen from "./wallet";
import GameScreen from "./game";
import ProfileScreen from "./profile";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Stats"
    screenOptions = { ({route}) => ({
        tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Wallet") {
              iconName = "wallet-outline";
            } else if (route.name === "Profile") {
              iconName = "person-outline";
            } else if (route.name === "Stats") {
              iconName = "stats-chart-outline";
            } else if (route.name === "Game") {
              iconName = "game-controller-outline";
            } else if (route.name === "Settings") {
              iconName = "settings-outline";
            }

            return <Ionicons name={iconName as keyof typeof Ionicons.glyphMap} size={size} color={color} />;
          },
        tabBarStyle: {
            backgroundColor: 'black',
        },
        tabBarActiveTintColor: 'rgb(91, 73, 173)',
        tabBarInactiveTintColor: 'white',
        headerShown: false,
    })}
    >
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Game" component={GameScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
