import React, { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigator';
import useColors from '../theme/Colors';
import IconBox from '../components/IconBox';

const Tab = createBottomTabNavigator();

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
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: { height: 70 }
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <IconBox
                focused={focused}
                color={focused ? 'primary' : 'gray'}
                name="home-outline"
              />
            )
          }}
        />

        <Tab.Screen
          name="Map"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <IconBox
                focused={focused}
                color={focused ? 'primary' : 'gray'}
                name="map-outline"
              />
            )
          }}
        />

        <Tab.Screen
          name="News"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <IconBox
                focused={focused}
                color={focused ? 'primary' : 'gray'}
                name="newspaper-outline"
              />
            )
          }}
        />

        <Tab.Screen
          name="Favourites"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <IconBox
                focused={focused}
                color={focused ? 'primary' : 'gray'}
                name="heart-outline"
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
