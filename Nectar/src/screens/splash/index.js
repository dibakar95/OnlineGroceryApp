import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Logo} from '../../assets/icons';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38C883',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
