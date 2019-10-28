import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndom = Math.floor(Math.random() * (max - min)) + min;
  if (rndom === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndom;
  }
}

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, props.userChoice));
  return (
    <View style={styles.screen}>
      <Text>Opponent Guess Number</Text>
      <NumberContainer>{props.userChoice}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" />
        <Button title="GRETER" />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  }
});

export default GameScreen;
