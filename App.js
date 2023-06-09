import * as React from 'react';
import { Platform, StatusBar, Text } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserCardProvider } from './context/UserCardContext';
import { MyCardsProvider } from './context/MyCardsContext';

import Login from './screens/Login';
import Register from './screens/Register';
import Register1 from './screens/Register1';
import Register2 from './screens/Register2';
import Register3 from './screens/Register3';
import Home from './screens/Home';
import MyCards from './screens/MyCards';
import Scanner from './screens/Scanner';
import Settings from './screens/Settings';
import Wallet from './screens/Wallet';

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  const Stack = createNativeStackNavigator();

  //used to load the font family
  React.useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync ({
        Montserrat: require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),

      })
      setFontLoaded(true);
    }

    loadFonts();
  }, [])

  if(!fontLoaded) {
    return
  }

  // Set the default font family for all Text components
  Text.defaultProps = {
    style: {
      fontFamily: 'Montserrat',
    },
  };

  return (
    <NavigationContainer>
      <StatusBar barStyle={Platform.OS === 'ios' ? "dark-content" : 'light-content'}/>
      <UserCardProvider>
        <MyCardsProvider>
          <Stack.Navigator>
            <Stack.Screen name='Register' component={Register} options={{headerShown: false}} />
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
            <Stack.Screen name='Register1' component={Register1} options={{headerShown: false}} />
            <Stack.Screen name='Register2' component={Register2} options={{headerShown: false}} />
            <Stack.Screen name='Register3' component={Register3} options={{headerShown: false}} />
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
            <Stack.Screen name='MyCards' component={MyCards} options={{headerShown: false}} />
            <Stack.Screen name='Scanner' component={Scanner} options={{headerShown: false}}/>
            <Stack.Screen name='Settings' component={Settings} />
            <Stack.Screen name='Wallet' component={Wallet} options={{headerShown: false}}/>
          </Stack.Navigator>
        </MyCardsProvider>
      </UserCardProvider>
    </NavigationContainer>
  );
}
