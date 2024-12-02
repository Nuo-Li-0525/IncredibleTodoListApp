import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import MainLayout from "../layouts/MainLayout";

const AboutScreen = () => {
  const handleNamePress = () => {
    alert("You found the Easter egg!");
  };

  return (
    <MainLayout>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.text}>
        This app helps you manage your tasks effectively.
      </Text>
      <TouchableOpacity onPress={handleNamePress}>
        <Text style={styles.name}>Created by: Nuo Li</Text>
      </TouchableOpacity>
      <Text style={styles.date}>Date: {new Date().toLocaleDateString()}</Text>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    color: "blue",
    fontWeight: "bold",
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
  },
});

export default AboutScreen;
