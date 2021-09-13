import React from 'react';
import { View } from 'react-native';

import Typo from '../components/Typo';

const HomeScreen = () => {
  return (
    <View>
      <Typo variant="h1">Explore</Typo>
      <Typo variant="h1">all sights</Typo>
    </View>
  );
};

export default HomeScreen;
