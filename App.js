import React from 'react';
import CommonLoader from './source/components/commonLoader';
import {GlobalProvider} from './source/context/Provider';
import AppNavigationContainer from './source/navigation/AppNavigationContainer';

export default function App() {
  return (
    <GlobalProvider>
      <AppNavigationContainer />
      <CommonLoader />
    </GlobalProvider>
  );
}
