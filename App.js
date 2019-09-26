import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Animated } from "react-native";
import Weather from './components/Weather';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ZipCodeScreen from "./components/ZipCodeScreen";
import WeatherScreen from "./components/WeatherScreen";


const RootStack = createStackNavigator(
  {
    Weather: { screen: WeatherScreen },
    ZipCode: { screen: ZipCodeScreen },
  },
  {
   initialRouteName: 'Weather',
  }
);

const App = createAppContainer(RootStack);
export default App;