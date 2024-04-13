import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignUpScren from './src/screens/SignUpScren';
import LoginScren from './src/screens/LoginScren';
import DrawerNavigationScreen from './src/screens/DrawerNavigationScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image, Text, View } from 'react-native';
// import logoMostBTlo from './src/assets/pictures/logo_MOST_z_tlem_skompresowane.png';

// //main navigation setup
const RootStack = createNativeStackNavigator<RootStackParamList>();

const NavStack = () => (
    <RootStack.Navigator initialRouteName="DrawerNav">
        <RootStack.Screen name={'Login'} component={LoginScren} />
        <RootStack.Screen name={'SignUp'} component={SignUpScren} />
        <RootStack.Screen name={'DrawerNav'} component={DrawerNavigationScreen} options={{ headerShown: false }} />
    </RootStack.Navigator>
);
// //**********************

function App(): React.JSX.Element {

  return (
    <SafeAreaProvider >
        <NavigationContainer>
            <NavStack />
        </NavigationContainer>
    </SafeAreaProvider>
    // <NavigationContainer>
    //   <View>
    //     <Text>MOST App</Text>
    //   </View>
    // </NavigationContainer>
  );
}


export default App;
