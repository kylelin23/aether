import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartingScreen from '../(tabs)/index'
import LogInPage from '../(tabs)/log_in'

const StartingStack = createStackNavigator();

export default function App() {
    return (
        <StartingStack.Navigator initialRouteName="StartingScreen">
            <StartingStack.Screen name="StartingScreen" component={StartingScreen} />
            <StartingStack.Screen name="LogInPage" component={LogInPage} />
        </StartingStack.Navigator>
    );
  }