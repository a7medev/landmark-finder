import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins';

const FontsInit = ({ children }) => {
  const [loaded] = useFonts({
    regular: Poppins_400Regular,
    bold: Poppins_600SemiBold
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return children;
};

export default FontsInit;
