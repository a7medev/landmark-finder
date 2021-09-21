import React from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ActivityCard from '../components/ActivityCard';
import PlaceCard from '../components/PlaceCard';
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
    image: 'https://unsplash.it/250/250'
  }
];

const topPicks = [
  {
    image:
      'https://www.planetware.com/photos-large/EGY/egypt-cairo-pyramids-of-giza-and%20camels-2.jpg',
    name: 'Piramids\nof Giza',
    location: 'Giza'
  },
  {
    image:
      'https://images.memphistours.com/large/165bf35dfa22ebd1a43ed3beda590a83.jpg',
    name: 'Karnak\nTemple',
    location: 'Luxor'
  },
  {
    image: 'https://cdn.getyourguide.com/img/tour/6082a8491c61d.jpeg/99.jpg',
    name: 'Giftun\nIsland',
    location: 'Hurghada'
  }
];

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.screen}>
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

        <Typo variant="h2" style={styles.subheading}>
          Top picks
        </Typo>

        <FlatList
          data={topPicks}
          keyExtractor={item => item.name}
          renderItem={({ item }) => <PlaceCard {...item} />}
          horizontal
        />
      </ScrollView>
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
