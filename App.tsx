/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, useColorScheme, Text } from 'react-native';

function App() {
  var isDarkMode = useColorScheme() === 'dark'
  return <SafeAreaView>
    <Text style = {isDarkMode?style.textStyleDarkMode: style.textStyleLighMode}>Hello React</Text>
  </SafeAreaView>
}


const style = StyleSheet.create(
  {
    textStyleDarkMode: {
      color: 'white'
    },
    textStyleLighMode: {
      color: 'black'
    }
  }
)

export default App




