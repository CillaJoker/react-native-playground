import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [error, setError] = useState("");
  const [nextKey, setNextKey] = useState(1);

  function addGoalHandler(enteredGoalText) {
    if (!enteredGoalText) {
      setError("Please enter a goal");
      return;
    }
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: nextKey.toString() },
    ]);
    setNextKey(nextKey + 1);
  }

  function clearError() {
    setError("");
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        clickAddHandler={addGoalHandler}
        errorInfo={error}
        clearError={clearError}
      />
      {/*Hold the input area for the user to enter text*/}
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return <GoalItem data={itemData} />;
        }}
        style={styles.goalsContainer}
        accessibilityLabel="List of Goals" //android
        testID="List of Goals" //ios
        alwaysBounceVertical={false}
      ></FlatList>
      {/*Hold the list of goals that the user has input*/}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 22,
  },
});
