import { StyleSheet, View, Text, Button, TextInput, Modal, Image } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState(() => {});
  const [error, setError] = useState("");
  function clearError() {
    setError(null);
  }
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    clearError();
  }

  function addGoalHandler(addHandler, enteredGoalText) {
    if (!enteredGoalText) {
      setError("Please enter a goal");
      return;
    }
    addHandler(enteredGoalText);
    setEnteredGoalText("");
    if(!error){
      props.closeModal()
    }
  }
  return (
    <>
    <StatusBar style="light"/>
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <Image source={require('../assets/images/goal.png')} style={styles.image}/>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your goal!"
        placeholderTextColor="#000000"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        accessibilityLabel="Input Goal" //android
        testID="Input Goal" //ios
      />

      <View style={styles.buttonContainer}>
      <View style= {styles.button}>
      <Button
        title="Cancel"
        onPress={() => props.closeModal()}
        accessibilityLabel="Cancel" //android
        testID="Cancel" //ios
        color={'#f312a2'}
      />
      </View>
        <View style= {styles.button}>
      <Button
        title="Add Goal"
        onPress={() => addGoalHandler(props.clickAddHandler, enteredGoalText)}
        accessibilityLabel="Add goal CTA" //android
        testID="Add goal CTA" //ios
        color={'#809ef0'}
      />
      </View>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      
    </View>
    </Modal>
    </>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#7f0ee8'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#a061db',
    color:"#000000",
    backgroundColor:'#a061db',
    width: "100%",
    marginRight: 8,
    padding: 16,
    borderRadius: 6,
  },
  errorText: {
    color: "#ff0000",
    marginTop: 8,
  },
   buttonContainer: {
    marginTop:16,
    flexDirection: 'row'
  },
  button: {
    width: 100,
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
});
