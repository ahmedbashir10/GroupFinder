import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Corrected import

const PreferencesScreen = ({ navigation }) => {
  const [location, setLocation] = useState("remote");
  const [grade, setGrade] = useState("flexible");
  const [specificPreference, setSpecificPreference] = useState("");
  const [minSize, setMinSize] = useState("");
  const [maxSize, setMaxSize] = useState("");

  const handleFindMatch = () => {
    navigation.navigate('MatchResults'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Preferences</Text>

      <Text style={styles.label}>Location preferences</Text>
      <Picker
        selectedValue={location}
        style={styles.picker}
        onValueChange={(itemValue) => setLocation(itemValue)}
      >
        <Picker.Item label="Remote" value="remote" />
        <Picker.Item label="Real-life" value="real-life" />
        <Picker.Item label="Flexible" value="flexible" />
      </Picker>

      <Text style={styles.label}>Grade preference</Text>
      <Picker
        selectedValue={grade}
        style={styles.picker}
        onValueChange={(itemValue) => setGrade(itemValue)}
      >
        <Picker.Item label="Pass" value="pass" />
        <Picker.Item label="Higher" value="higher" />
        <Picker.Item label="Flexible" value="flexible" />
      </Picker>

      <Text style={styles.label}>Specific preferences</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g., Only English..."
        value={specificPreference}
        onChangeText={setSpecificPreference}
      />

      <Text style={styles.label}>Group Size</Text>
      <View style={styles.sizeInputContainer}>
        <TextInput
          style={[styles.input, styles.sizeInput]}
          placeholder="Min"
          value={minSize}
          onChangeText={setMinSize}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.sizeInput]}
          placeholder="Max"
          value={maxSize}
          onChangeText={setMaxSize}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity
        style={styles.findMatchButton}
        onPress={handleFindMatch}
      >
        <Text style={styles.buttonText}>FIND MATCH</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

// Your StyleSheet remains the same


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#84b5f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    color: '#ffffff',
    marginBottom: 30,
  },
  label: {
    alignSelf: 'center',
    color: '#ffffff',
    marginBottom: 10,
  },
  picker: {
    width: '30%',
    backgroundColor: '#ffffff',
    marginBottom: 20,

  },
  input: {
    width: '30%',
    backgroundColor: '#ffffff',
    marginBottom: 20,
    paddingHorizontal: 10,
    height: 40,
  },
  sizeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
  },
  sizeInput: {
    width: '40%',
  },
  findMatchButton: {
    backgroundColor: '#4caf50',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    borderRadius: 20,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#f44336',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    borderRadius: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default PreferencesScreen;
