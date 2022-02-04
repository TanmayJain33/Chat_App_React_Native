import React from 'react';
import CommonLoader from './source/components/commonLoader';
import {GlobalProvider} from './source/context/Provider';
import Providers from './source/navigation';

export default function App() {
  return (
    <GlobalProvider>
      <Providers />
      <CommonLoader />
    </GlobalProvider>
  );
}
