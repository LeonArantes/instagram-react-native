import { StackActions } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import SignUp from '../screens/SignUp';
import TabRoutes from '../routes/tabs.routes';

const ScreenRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={TabRoutes} />
    </Stack.Navigator>
  );
};

export default ScreenRoutes;
