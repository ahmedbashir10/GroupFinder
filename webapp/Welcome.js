import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const WelcomeScreen = ({ onNavigate }) => {
  const [fullName, setFullName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>WELCOME TO GROUP FINDER</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={setFullName}
        value={fullName}
      />
      <TouchableOpacity style={styles.button} onPress={onNavigate}>
        <Text style={styles.buttonText}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#64b5f6", // Replace with the exact color code from your design
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: "#ffffff", // Replace with the exact color code from your design
    marginBottom: 20,
  },
  input: {
    width: "80%",
    backgroundColor: "#ffffff", // Replace with the exact color code from your design
    padding: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4caf50", // Replace with the exact color code from your design
    padding: 15,
  },
  buttonText: {
    color: "#ffffff", // Replace with the exact color code from your design
    fontSize: 18,
  },
});

export default WelcomeScreen;
