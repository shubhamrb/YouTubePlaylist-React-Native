import {red} from 'jest-matcher-utils/node_modules/chalk';
import React from 'react';
import {ImageBackground, StyleSheet, View, Image, Text} from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/images/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo-red.png')}
        />
        <Text>Sell What You Don't Need</Text>
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 70,
  },
  tagline: {
    color: 'black',
    top: 70,
    fontSize: 18,
  },

  loginButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#fc5c65',
  },
  registerButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#4ecdc4',
  },
});
export default WelcomeScreen;
