import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Typo from './Typo';
import useColors from '../theme/Colors';

const PlaceCard = ({ image, name, location }) => {
  const colors = useColors();

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: colors.white, borderColor: colors.light }
      ]}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Typo style={styles.name}>{name}</Typo>

        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" color={colors.primary} size={18} />
          <Typo color="gray" style={styles.location}>
            {location}
          </Typo>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginRight: 15,
    borderRadius: 20,
    width: 150,
    borderWidth: 1
  },
  image: {
    height: 125,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  content: {
    padding: 15
  },
  name: {
    marginBottom: 7
  },
  locationContainer: {
    flexDirection: 'row'
  },
  location: {
    marginLeft: 5
  }
});

export default PlaceCard;
