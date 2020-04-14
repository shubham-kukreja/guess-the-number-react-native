import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/CustomButton";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setconfirmed] = useState(false);
  const [selectedNumber, setselectedNumber] = useState();
  const numberHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };
  const resetInputHandler = () => {
    setEnteredValue("");
    setconfirmed(false);
  };
  const confirmInputHandler = () => {
    Keyboard.dismiss()
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Enter a Valid Number from 0-99");
      return;
    }
    setconfirmed(true);
    setselectedNumber(enteredValue);
    setEnteredValue("");
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>Choosen Number : </Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <CustomButton onTouch={() => props.onStartGame(selectedNumber)}>
          START GAME
        </CustomButton>
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Game Screen</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalization="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={numberHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  input: {
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  summaryContainer: {
    marginTop: 20,
  },
});
export default StartGameScreen;
