import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

const CourseIDScreen = ({ onNavigate }) => {
  const [courseId, setCourseId] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>GROUP FINDER</Text>
      <Text style={styles.subHeader}>What is your course ID?</Text>

      <Picker
        selectedValue={courseId}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setCourseId(itemValue)}
      >
        <Picker.Item label="ID221" value="ID221" />
        <Picker.Item label="ID2214" value="ID2214" />
        <Picker.Item label="ID2216" value="ID2216" />
        <Picker.Item label="ID2218" value="ID2218" />
        <Picker.Item label="ID2219" value="ID2219" />
      </Picker>

      <TouchableOpacity
        style={[styles.button, { marginTop: 20 }]}
        onPress={() => {
          /* logic to handle course ID selection */
          onNavigate();
        }}
      >
        <Text style={styles.buttonText}>Find group</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { marginTop: 10 }]}
        onPress={() => {
          /* logic to navigate to My Groups */
          onNavigate();
        }}
      >
        <Text style={styles.buttonText}>My Groups</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#64b5f6",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: "#ffffff",
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    color: "#ffffff",
    marginBottom: 20,
  },
  picker: {
    width: "80%",
    backgroundColor: "#ffffff",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4caf50",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    borderRadius: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
  },
  // ... add other styles here as needed
});

export default CourseIDScreen;
