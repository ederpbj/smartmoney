import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Main = () => (
  <View styles={style.container}>
    <Text styles={style.label}>Main</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
