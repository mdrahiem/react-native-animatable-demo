import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './screens/ProductList';
import themeVariables from './utils/themeVariables';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeVariables.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
