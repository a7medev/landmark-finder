import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import FontsInit from './components/FontsInit';

const App = () => {
  return (
    <FontsInit>
      <View style={styles.container}>
        <Text style={styles.text}>Landmarks Finder</Text>

        <StatusBar style="auto" />
      </View>
    </FontsInit>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'regular'
  }
});

export default App;
