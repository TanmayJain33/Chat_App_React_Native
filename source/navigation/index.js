import React from 'react';
import AppNavigationContainer from './AppNavigationContainer';
import {AuthProvider} from './AuthProvider';

const Providers = () => {
  return (
    <AuthProvider>
      <AppNavigationContainer />
    </AuthProvider>
  );
};

export default Providers;
