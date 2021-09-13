import React from 'react';
import { StatusBar } from 'expo-status-bar';

import AppNavigator from './navigation/AppNavigator';
import FontsInit from './components/FontsInit';

const App = () => {
  return (
    <FontsInit>
      <StatusBar style="auto" />

      <AppNavigator />
    </FontsInit>
  );
};

export default App;
