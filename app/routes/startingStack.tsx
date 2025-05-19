import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartingScreen from '../(tabs)/index'
import LogInPage from '../(tabs)/log_in'

const startingStack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <startingStack.Navigator initialRouteName="StartingScreen">
                <startingStack.Screen name="StartingScreen" component={StartingScreen} />
                <startingStack.Screen name="LogInPage" component={LogInPage} />
            </startingStack.Navigator>
        </NavigationContainer>
    );
  }