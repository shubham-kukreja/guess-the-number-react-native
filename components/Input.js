import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const Input = props => {
  return <TextInput {...props} style={styles.textInput} />;
};

const styles = StyleSheet.create({
  textInput: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
    width : 30
  },
});
export default Input;
