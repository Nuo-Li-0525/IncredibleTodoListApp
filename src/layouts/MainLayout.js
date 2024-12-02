import React from "react";
import { View, StyleSheet, Text } from "react-native";

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Nuo Li.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  footer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
  },
  footerText: {
    textAlign: "center",
    fontSize: 12,
    color: "#888",
  },
});

export default MainLayout;
