import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import colors from '../config/colors';

function ViewImageScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/images/chair.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 10,
    left: 30,
  },
  deleteIcon: {
    width: 40,
    height: 40,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 10,
    right: 30,
  },
  background: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default ViewImageScreen;
