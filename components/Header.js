import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const Header = props => {
  return (
    <View style={styles.header}>
      <Text {...props} style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#f7287b',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 25,
    fontFamily : 'open-sans-bold'
  },
});
export default Header;
