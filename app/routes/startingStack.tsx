import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../(tabs)/index'
import LogInPage from '../(tabs)/log_in'
import SignUpPage2 from '../(tabs)/sign_up_age'
import SignUpPage3 from '../(tabs)/sign_up_college'
import SignUpPage4 from '../(tabs)/sign_up_goals'
import AllDone from '../(tabs)/allDone'
import TabNavigator from '../(tabs)/tabNavigator'

const StartingStack = createStackNavigator();

export default function App() {
    return (
        <StartingStack.Navigator initialRouteName="Home">
            <StartingStack.Screen name="Home" component={HomeScreen} options = {{headerShown: false}} />
            <StartingStack.Screen name="Log In" component={LogInPage} options = {{headerShown: false}} />
            <StartingStack.Screen name="Sign Up 2" component={SignUpPage2} options = {{headerShown: false}} />
            <StartingStack.Screen name="Sign Up 3" component={SignUpPage3} options = {{headerShown: false}} />
            <StartingStack.Screen name="Sign Up 4" component={SignUpPage4} options = {{headerShown: false}} />
            <StartingStack.Screen name="All Done" component={AllDone} options = {{headerShown: false}} />
            <StartingStack.Screen name="Home Page" component={TabNavigator} options = {{headerShown: false}} />
        </StartingStack.Navigator>
    );
  }