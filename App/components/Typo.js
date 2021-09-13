import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Colors from '../theme/Colors';

const Typo = ({ children, color = 'black', variant }) => {
  return (
    <Text
      style={[
        styles.base,
        variant && styles[variant],
        { color: Colors[color] }
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontFamily: 'regular'
  },
  h1: {
    fontSize: 32,
    fontFamily: 'bold'
  }
});

export default Typo;
