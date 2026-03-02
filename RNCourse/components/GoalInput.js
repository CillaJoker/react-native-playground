import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useState } from "react";
function GoalInput({ clickAddHandler, errorInfo, clearError }) {
  const [enteredGoalText, setEnteredGoalText] = useState(() => {});
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    clearError();
  }

  function addGoalHandler(addHandler, enteredGoalText) {
    addHandler(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        accessibilityLabel="Input Goal" //android
        testID="Input Goal" //ios
      />
      <Button
        title="Add Goal"
        onPress={() => addGoalHandler(clickAddHandler, enteredGoalText)}
        accessibilityLabel="Add goal CTA" //android
        testID="Add goal CTA" //ios
      />
      {errorInfo ? <Text style={styles.errorText}>{errorInfo}</Text> : null}
    </View>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    paddingTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#0e3de8",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#000000",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  errorText: {
    color: "#ff0000",
    marginTop: 8,
  },
});
