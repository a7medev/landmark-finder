import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ActivityCard from '../components/ActivityCard';
import IconBox from '../components/IconBox';
import Search from '../components/Search';
import Spacing from '../theme/Spacing';
import Typo from '../components/Typo';

const activities = [
  {
    name: 'Outdoors',
    image: 'https://unsplash.it/251/250'
  },
  {
    name: 'Indoors',
    image: 'https://unsplash.it/250/251'
  },
  {
    name: 'Exhibitions',
    image: 'https://unsplash.it/251/251'
  }
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Typo variant="h1" style={styles.headline}>
          Explore{'\n'}
          all sights
        </Typo>

        <IconBox name="map-outline" />
      </View>

      <Search />

      <Typo variant="h2" style={styles.subheading}>
        Type of activity
      </Typo>

      <FlatList
        data={activities}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <ActivityCard {...item} />}
        horizontal
      />
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
  },
  headline: {
    lineHeight: 40
  },
  subheading: {
    marginTop: 20,
    marginBottom: 10
  }
});

export default HomeScreen;
