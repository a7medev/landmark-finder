import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import IconBox from '../components/IconBox';
import Search from '../components/Search';
import Spacing from '../theme/Spacing';
import Typo from '../components/Typo';

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

      <Search />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: Spacing.screen
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  }
});

export default HomeScreen;
