import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

function ToDoList({ tasks }) {
  return (
    <View>
      <ScrollView>
        {/* Map through tasks and render each as a list item */}
        {tasks.map((task, index) => (
          <View key={index} style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
