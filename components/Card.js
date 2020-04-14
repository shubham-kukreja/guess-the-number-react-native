import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const Card = (props) => {
  return (
    <View style={[styles.card, props.style]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor : 'black',
    // borderWidth : 1,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    padding: 20,
    alignItems: "center",
  },
});

export default Card;
