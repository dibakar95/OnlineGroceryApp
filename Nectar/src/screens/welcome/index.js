import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Home} from '../../assets/images';
import {Carrot} from '../../assets/icons';
import {getHeight, getWidth} from '../../utils';
import {FontSize, Fonts, Colors} from '../../theme';

const Welcome = () => {
  return (
    <ImageBackground style={styles.mainContainer} source={Home}>
      <View style={styles.secondContainer} />
      <View style={styles.thirdContainer}>
        <Carrot style={{marginVertical: getWidth(10)}} />
        <Text style={styles.text}>Welcome</Text>
        <Text style={styles.text}>to our store </Text>
        <Text style={styles.text2}>
          Ger your groceries in as fast as one hour
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  secondContainer: {
    flex: 1,
  },
  thirdContainer: {
    flex: 1,

    alignItems: 'center',
  },
  button: {
    backgroundColor: '#53B175',
    height: '15%',
    width: '85%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: getWidth(40),
  },
  text: {
    color: Colors.white,
    fontSize: 48,
    fontFamily: Fonts.MontserratBold,
  },
  text2: {
    color: Colors.white,
    fontSize: 16,
  },
  buttonText:{
      color: Colors.white,
      fontFamily: Fonts.MontserratBold,
  }
});

export default Welcome;
