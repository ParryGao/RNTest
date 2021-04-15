import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBar from 'components/tab-bar';

/**
 * routing
 */
import Home from 'screens/home';
import Chart from 'screens/chart';
import Exchange from 'screens/exchange';
import Message from 'screens/message';
import Account from 'screens/account';

/**
 * nav config
 */
const stackConfig = {
  headerMode: 'none',
  navigationOptions: {
    header: null,
    cardStack: {
      gesturesEnabled: true,
    },
  },
};

const tabConfig = {
  tabBarComponent: TabBar,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
};

const Tab = createBottomTabNavigator();
const mainTab = () => (
  <Tab.Navigator
    tabBar={(props) => <tabConfig.tabBarComponent {...props} />}
    initialRouteName="Chat"
    tabBarOptions={{
      tabBarPosition: tabConfig.tabBarPosition,
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      initialParams={{
        icon: 'home',
      }}
    />
    <Tab.Screen
      name="Chart"
      component={Chart}
      initialParams={{
        icon: 'stats',
      }}
    />
    <Tab.Screen
      name="ExchangeModal"
      component={Exchange}
      initialParams={{
        icon: 'add',
      }}
    />
    <Tab.Screen
      name="Message"
      component={Message}
      initialParams={{
        icon: 'notification',
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      initialParams={{
        icon: 'account',
      }}
    />
  </Tab.Navigator>
);

const MainStack = createStackNavigator();
const MainNavigator = ({ defaultRoute }) => (
  <MainStack.Navigator
    headerMode={stackConfig.headerMode}
    screenOptions={stackConfig.navigationOptions}
    initialRouteName={defaultRoute}
    mode="modal"
  >
    <MainStack.Screen
      name="Main"
      component={mainTab}
    />
    <MainStack.Screen
      name="Exchange"
      component={Exchange}
    />
  </MainStack.Navigator>
);

export const getDefaultRoute = () => 'Main';

export default MainNavigator;
