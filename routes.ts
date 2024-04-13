import {NativeStackNavigationProp} from '@react-navigation/native-stack';


export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  DrawerNav: undefined;
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
