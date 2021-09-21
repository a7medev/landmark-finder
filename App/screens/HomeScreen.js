import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconBox from '../components/IconBox';

import Typo from '../components/Typo';
import Spacing from '../theme/Spacing';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Typo variant="h1">
          Explore{'\n'}
          all sights
        </Typo>

        <IconBox name="map-outline" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: Spacing.screen
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default HomeScreen;
