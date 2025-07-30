import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StatsScreen from "./statsScreen";
import SettingsScreen from "./settings";
import WalletScreen from "./wallet";
import GameScreen from "./game";
import ProfileScreen from "./profile";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Stats"
    screenOptions = {{
        tabBarStyle: {
            backgroundColor: 'black',
        },
        tabBarActiveTintColor: 'rgb(91, 73, 173)',
        tabBarInactiveTintColor: 'white',
    }}
    >
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Game" component={GameScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
