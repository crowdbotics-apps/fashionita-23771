import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen49191693Navigator from '../features/BlankScreen49191693/navigator';
import Maps191675Navigator from '../features/Maps191675/navigator';
import Additem191674Navigator from '../features/Additem191674/navigator';
import Maps191670Navigator from '../features/Maps191670/navigator';
import UserProfile191666Navigator from '../features/UserProfile191666/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen49191693: { screen: BlankScreen49191693Navigator },
Maps191675: { screen: Maps191675Navigator },
Additem191674: { screen: Additem191674Navigator },
Maps191670: { screen: Maps191670Navigator },
UserProfile191666: { screen: UserProfile191666Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
