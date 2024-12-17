import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the JSON file on component load
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await import("../data/tasks.json");
        setTasks(response.tasks);
      } catch (error) {
        console.error("Error loading tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  // Function to generate a random task
  const handleGenerateTask = () => {
    if (tasks.length > 0) {
      const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
      setTaskText(randomTask);
      addTask(randomTask);
    }
  };

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText(""); // Clear the input field
    }
  };

  return (
    <View style={styles.form}>
      {/* Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={taskText}
        onChangeText={setTaskText}
      />

      {/* Buttons placed vertically */}
      <View style={styles.buttonContainer}>
        <Button title="Add Task" onPress={handleAddTask} />
        <View style={styles.spacing} />
        <Button title="Generate Random Task" onPress={handleGenerateTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "column", // Buttons arranged vertically
    width: "80%",
    alignItems: "center",
  },
  spacing: {
    height: 10, // Adds vertical space between buttons
  },
});

export default ToDoForm;
