import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

export default function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  // Function to add a new task
  const addTask = (taskText) => {
    if (taskText && !tasks.includes(taskText)) {
      setTasks([...tasks, taskText]); // Add the task to the state
    }
  };

  return (
    <View style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});
