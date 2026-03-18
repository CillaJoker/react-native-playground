import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable 
      style = {({pressed})=> pressed && styles.pressedItem}
      onPress={props.onDeleteItem.bind(this, props.id)} >
      <Text
        style={styles.goalText}
        accessibilityLabel={"List Item Number " + props.data.index + 1} //android
        testID={"List Item Number " + props.data.index + 1} //ios
      >
        {props.data.index + 1 + ". " + props.text}
      </Text>
      </Pressable>
    </View>
    
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderColor: '#7f0ee8',
    borderWidth: 1,
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: '#7f0ee8',
  },
  pressedItem: {
    opacity:0.5,
    backgroundColor: "#ff0000"
  },
  goalText: {
    color: "#ffffff",
    padding: 8,
  },
});
