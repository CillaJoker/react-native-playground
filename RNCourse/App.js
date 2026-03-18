import { Button, StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalVisible] = useState(false);

  function startAddGoalHandler() {
    setModalVisible(true);
  }
  function endAddGoalHandler() {
    setModalVisible(false);
  }
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title="Add Goal" color='#809ef0' onPress={startAddGoalHandler} />
      {modalIsVisible && (
        <GoalInput
          clickAddHandler={addGoalHandler}
          closeModal={endAddGoalHandler}
          visible={modalIsVisible}
        />
      )}
      {/*Hold the input area for the user to enter text*/}
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return (
            <GoalItem
              id={itemData.item.id}
              data={itemData}
              text={itemData.item.text}
              onDeleteItem={deleteGoalHandler}
            />
          );
        }}
        style={styles.goalsContainer}
        accessibilityLabel="List of Goals" //android
        testID="List of Goals" //ios
        alwaysBounceVertical={false}
      ></FlatList>
      {/*Hold the list of goals that the user has input*/}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#a061db",
  },

  goalsContainer: {
    flex: 22,
  },
});
