import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import useColors from '../theme/Colors';

const Search = () => {
  const colors = useColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.light }]}>
      <Ionicons name="paper-plane-outline" size={20} color={colors.primary} />
      <TextInput placeholder="Cairo, Egypt" style={styles.input} />
      <Ionicons name="mic-outline" size={24} color={colors.black} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    paddingHorizontal: 15
  },
  input: {
    flex: 1,
    fontFamily: 'regular',
    padding: 15
  }
});

export default Search;
