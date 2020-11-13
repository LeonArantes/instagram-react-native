import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ScreenRoutes from './screens.routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <ScreenRoutes />
    </NavigationContainer>
  );
};

export default Routes;
