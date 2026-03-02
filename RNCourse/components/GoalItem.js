import { StyleSheet, View, Text } from "react-native";
function GoalItem({ data }) {
  return (
    <View style={styles.goalItem}>
      <Text
        style={styles.goalText}
        accessibilityLabel={"List Item Number " + data.index + 1} //android
        testID={"List Item Number " + data.index + 1} //ios
      >
        {data.index + 1 + ". " + data.item.text}
      </Text>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderColor: "#000000",
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: "#b1e2eb",
  },
  goalText: {
    color: "#000000",
  },
});
