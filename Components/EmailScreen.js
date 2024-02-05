import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const EmailScreen = ({ onNavigate }) => {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Please provide your Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={onNavigate}>
        <Text style={styles.buttonText}>→</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>
        Your email will strictly be used for your future group members to
        contact you and no other purposes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#64b5f6", // This should be the background color from your design
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 20,
    color: "#ffffff", // This should be the text color from your design
    marginBottom: 20,
  },
  input: {
    width: "80%",
    backgroundColor: "#ffffff", // This should be the input background color from your design
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#4caf50", // This should be the button background color from your design
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff", // This should be the button text color from your design
    fontSize: 18,
  },
  footer: {
    marginTop: 20,
    color: "#ffffff", // This should be the footer text color from your design
    fontSize: 14,
    textAlign: "center",
  },
});

export default EmailScreen;
