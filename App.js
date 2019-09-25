/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ImageBackground,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';

import getImageForWeather from './utils/getImageForWeather';
import SearchInput from './components/SearchInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: '#fff',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
    };
  }

  componentDidMount() {
    this.handleUpdateLocation('San Francisco');
  }

  handleUpdateLocation = city => {
    this.setState({location: city});
  };

  render = () => {
    const {location} = this.state;
    return (
      <>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <KeyboardAvoidingView style={styles.container} behavior="height">
          <ImageBackground
            source={getImageForWeather('Clear')}
            style={styles.imageContainer}
            imageStyle={styles.image}>
            <View style={styles.detailsContainer}>
              <Text style={[styles.largeText, styles.textStyle]}>
                {location}
              </Text>
              <Text style={[styles.smallText, styles.textStyle]}>
                Light Cloud
              </Text>
              <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
              <SearchInput
                placeholder="Search any city"
                onSubmit={this.handleUpdateLocation}
              />
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
      </>
    );
  };
}
