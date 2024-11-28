import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState(""); // Local state for input field

  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText.trim()); // Call addTask passed from App.js
      setTaskText(""); // Clear input field after adding task
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
