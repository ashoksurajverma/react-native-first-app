import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

const App = () => {
  return (
   <View>
     <Header title="Guess a number" />
     <StartGameScreen />
   </View>
  );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
 }
});

export default App;
