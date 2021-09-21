import React, { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import useColors from '../theme/Colors';

const Stack = createNativeStackNavigator();

const options = { headerShown: false };

const AppNavigator = () => {
  const colors = useColors();

  const theme = useMemo(
    () => ({
      dark: false,
      colors: {
        primary: colors.primary,
        background: colors.white,
        card: colors.white,
        text: colors.black,
        border: colors.light,
        notification: colors.primary
      }
    }),
    [colors]
  );

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
