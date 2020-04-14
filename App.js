import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Header from "./components/Header";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const App = (props) => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setguessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setguessRounds(0);
  };
  const newGameHandler = () => {
    setguessRounds(0);
    setUserNumber(null);
  };
  const gameOverHandler = (nofRounds) => {
    setguessRounds(nofRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        userNumber={userNumber}
        rounds={guessRounds}
        newGame={newGameHandler}
      />
    );
  }

  return (
    <>
      <Header title="Guess the Number" />
      <View style={styles.screen}>{content}</View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});
export default App;
