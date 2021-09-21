import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import Typo from './Typo';

const ActivityCard = ({ name, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <Typo>{name}</Typo>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginRight: 15
  },
  image: {
    width: 115,
    height: 115,
    borderRadius: 25,
    marginBottom: 10
  }
});

export default ActivityCard;
