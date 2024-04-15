import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScren from './LoginScren';

const DrawerNavigationScreen: React.FC = () => {
  
      //TODO: when change option in drawer navigator while adding new event close adding event form
    //TODO: TEST navigation
    const SideMenuDrawer = createDrawerNavigator();
    return (
  
      //drawer navigation setup
      <SideMenuDrawer.Navigator initialRouteName="LoginScren">
        <SideMenuDrawer.Screen name='LoginScren'
          component={LoginScren} />
        
      </SideMenuDrawer.Navigator>
      //***********************
  
  
    );
  };

export default DrawerNavigationScreen
