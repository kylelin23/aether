import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../(tabs)/index'
import LogInPage from '../(tabs)/log_in'
import SignUpPage from '../(tabs)/sign_up'
import SignUpPage2 from '../(tabs)/sign_up_age'
import SignUpPage3 from '../(tabs)/sign_up_college'
import SignUpPage4 from '../(tabs)/sign_up_goals'
import AllDone from '../(tabs)/allDone'
import TabNavigator from '../(tabs)/tabNavigator'

const StartingStack = createStackNavigator();

export default function App() {
    return (
        <StartingStack.Navigator initialRouteName="Home">
            <StartingStack.Screen name="Home" component={HomeScreen} />
            <StartingStack.Screen name="Log In" component={LogInPage} />
            <StartingStack.Screen name="Sign Up" component={SignUpPage} />
            <StartingStack.Screen name="Sign Up 2" component={SignUpPage2} />
            <StartingStack.Screen name="Sign Up 3" component={SignUpPage3} />
            <StartingStack.Screen name="Sign Up 4" component={SignUpPage4} />
            <StartingStack.Screen name="All Done" component={AllDone} />
            <StartingStack.Screen name="Home Page" component={TabNavigator} />
        </StartingStack.Navigator>
    );
  }