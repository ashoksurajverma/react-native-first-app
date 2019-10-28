import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../constants/color';

const Header = props => {
  return(
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 90,
    backgroundColor: Color.primary,
    paddingTop: 5,
  },
  title: {
    fontSize:18,
    color: 'black',
  }
});
export default Header;