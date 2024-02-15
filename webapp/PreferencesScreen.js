import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const PreferencesScreen = ({ onNavigateBack, onFindMatch }) => {
  const [locationPreference, setLocationPreference] = useState("");
  const [gradePreference, setGradePreference] = useState("");
  const [specificPreference, setSpecificPreference] = useState("");
  const [minGroupSize, setMinGroupSize] = useState("");
  const [maxGroupSize, setMaxGroupSize] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Preferences</Text>

      <Text style={styles.label}>Location references</Text>
      <Picker
        selectedValue={locationPreference}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) =>
          setLocationPreference(itemValue)
        }
      >
        {/* Populate the Picker with options */}
        <Picker.Item label="Remote" value="remote" />
        <Picker.Item label="In-Meeting" value="in-meeting" />
        <Picker.Item label="Flexible" value="flexible" />
        {/* ... other options */}
      </Picker>

      <Text style={styles.label}>Grade preference</Text>
      <Picker
        selectedValue={gradePreference}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setGradePreference(itemValue)}
      >
        {/* Populate the Picker with options */}
        <Picker.Item label="Higher" value="higher" />
        <Picker.Item label="Pass" value="pass" />
        <Picker.Item label="Flexible" value="flexible" />
        {/* ... other options */}
      </Picker>

      <Text style={styles.label}>Specific preferences</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setSpecificPreference}
        value={specificPreference}
        placeholder="E.g., only English..."
      />

      <Text style={styles.label}>Group Size</Text>
      <View style={styles.groupSizeContainer}>
        <TextInput
          style={[styles.textInput, styles.groupSizeInput]}
          onChangeText={setMinGroupSize}
          value={minGroupSize}
          placeholder="Min"
        />
        <TextInput
          style={[styles.textInput, styles.groupSizeInput]}
          onChangeText={setMaxGroupSize}
          value={maxGroupSize}
          placeholder="Max"
        />
      </View>

      <TouchableOpacity style={styles.findMatchButton} onPress={onFindMatch}>
        <Text style={styles.buttonText}>FIND MATCH</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={onNavigateBack}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#64b5f6", // Replace with your actual background color
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: "#ffffff",
    marginBottom: 20,
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: "10%",
    color: "#ffffff",
    marginBottom: 5,
  },
  picker: {
    width: "80%",
    backgroundColor: "#ffffff",
    marginBottom: 20,
  },
  textInput: {
    width: "80%",
    backgroundColor: "#ffffff",
    marginBottom: 20,
    padding: 10,
  },
  groupSizeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  groupSizeInput: {
    width: "38%", // Adjust as needed
  },
  findMatchButton: {
    backgroundColor: "#4caf50", // Replace with your actual button color
    padding: 15,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  backButtonText: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default PreferencesScreen;
