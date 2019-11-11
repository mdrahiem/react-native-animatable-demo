import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import themeVariables from '../utils/themeVariables';

export class SelectLanguage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logoImg}
          source={require('../assets/dummy-logo.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: themeVariables.primaryColor,
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    width: 210,
    height: 130
  }
});

export default SelectLanguage
