import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from './src/screens/LandingPage';
import CommonLogin from './src/screens/CommonLogin';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} options={{headerShown: false}} />
        <Stack.Screen name="CommonLogin" component={CommonLogin} options={{headerTitle: '', headerTintColor: '#10eb4b', headerShadowVisible: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
