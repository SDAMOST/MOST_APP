import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScren from './LoginScren';

const DrawerNavigationScreen: React.FC = () => {
  
      //TODO: when change option in drawer navigator while adding new event close adding event form
    //TODO: TEST navigation
    const SideMenuDrawer = createDrawerNavigator();
    return (
  
      //drawer navigation setup
      <SideMenuDrawer.Navigator initialRouteName="Months">
        <SideMenuDrawer.Screen name='LoginScren'>
          {() => <LoginScren/>}
        </SideMenuDrawer.Screen>
      </SideMenuDrawer.Navigator>
      //***********************
  
  
    );
  };

export default DrawerNavigationScreen
