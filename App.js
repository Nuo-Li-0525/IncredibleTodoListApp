import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

export default function App() {
  // Part A: State Management
  // Define the state for tasks and initialize it with hard-coded tasks
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  return (
    <View style={styles.container}>
      {/* Part B: Passing Props */}
      {/* Pass the tasks array as a prop to the ToDoList component */}
      <ToDoList tasks={tasks} />
      <ToDoForm />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
