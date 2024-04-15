import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScren from '../LoginScreen/LoginScren';
import HomeScreen from '../HomeScreen/HomeScreen';
import OfferIntentionScreen from '../OfferIntentionScreen/OfferIntentionScreen';

const DrawerNavigationScreen: React.FC = () => {
  
      //TODO: when change option in drawer navigator while adding new event close adding event form
    //TODO: TEST navigation
    const SideMenuDrawer = createDrawerNavigator();
    return (
  
      //drawer navigation setup
      <SideMenuDrawer.Navigator initialRouteName="Strona główna">
        <SideMenuDrawer.Screen name='Strona główna' component={HomeScreen} />
        <SideMenuDrawer.Screen name='Zamów intencję' component={OfferIntentionScreen} />
        
      </SideMenuDrawer.Navigator>
      //***********************
  
  
    );
  };

export default DrawerNavigationScreen
