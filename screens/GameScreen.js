import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";

const randomGenerate = (min, max, exclude) => {
  min = Math.floor(min);
  max = Math.floor(max);
  const rndN = Math.floor(Math.random() * (max - min)) + min;
  if (rndN === exclude) {
    return randomGenerate(min, max, exclude);
  } else return rndN;
};

const GameScreen = (props) => {
  const initailGuess = randomGenerate(1, 100, parseInt(props.userChoice));
  const [currentGuess, setcurrentGuess] = useState(initailGuess);
  const [pastGuess, setpassGuess] = useState([initailGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const [rounds, setRounds] = useState(0);

  useEffect(() => {
    if (currentGuess === parseInt(props.userChoice)) {
      props.onGameOver(rounds);
    }
  }, [currentGuess, props]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't Lie");
      return;
    }
    if (direction === "lower") {
      currentHigh.current = parseInt(currentGuess);
    } else {
      currentLow.current = parseInt(currentGuess) + 1;
    }
    const nextNumber = randomGenerate(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setcurrentGuess(parseInt(nextNumber));
    setRounds((current) => current + 1);
    setpassGuess((currentPastGuess) => [nextNumber, ...currentPastGuess]);
  };

  const renderListItem = (value, numOfRound) => {
    return (
      <View key={value} style={styles.listItem}>
        <Text>#{numOfRound}</Text>
        <Text>{value}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Text>Opponents Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <CustomButton
          style={styles.button}
          onTouch={nextGuessHandler.bind(this, "lower")}
        >
          <Ionicons name="md-remove" />
        </CustomButton>
        <CustomButton
          style={styles.button}
          onTouch={nextGuessHandler.bind(this, "greater")}
        >
          <Ionicons name="md-add" />
        </CustomButton>
      </Card>
      <View style={styles.list}>
        <ScrollView>
          {pastGuess.map((guess, index) => renderListItem(guess, index+1))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  button: {
    borderRadius: 20,
  },
  list: {
    width: "80%",
    flex : 1
  },
  listItem: {
    borderColor: "#e3e3e3",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
export default GameScreen;
