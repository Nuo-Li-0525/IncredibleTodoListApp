import React, { useState } from "react";
import { Button } from "react-native";
import MainLayout from "../layouts/MainLayout";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  const addTask = (task) => {
    if (task && !tasks.includes(task)) {
      setTasks((prevTasks) => [...prevTasks, task]);
    }
  };

  return (
    <MainLayout>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </MainLayout>
  );
};

export default HomeScreen;
