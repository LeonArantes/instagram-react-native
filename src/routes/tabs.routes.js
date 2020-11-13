import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Feed from '../screens/Feed';
import Explore from '../screens/Explore';
import Notifications from '../screens/Notifications';
import AccountSettings from '../screens/AccountSettings';

const TabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="AccountSettings" component={AccountSettings} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
