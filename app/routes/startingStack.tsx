import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../(tabs)/index'
import LogInPage from '../(tabs)/log_in'
import SignUpPage from '../(tabs)/sign_up'

const StartingStack = createStackNavigator();

export default function App() {
    return (
        <StartingStack.Navigator initialRouteName="Home">
            <StartingStack.Screen name="Home" component={HomeScreen} />
            <StartingStack.Screen name="Log In" component={LogInPage} />
            <StartingStack.Screen name="Sign Up" component={SignUpPage} />
        </StartingStack.Navigator>
    );
  }