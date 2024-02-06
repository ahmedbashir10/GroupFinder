import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CourseIDScreen = ({ navigation, presenter }) => {
  const [selectedCourseID, setSelectedCourseID] = useState();

  const handleCourseIDSelect = (itemValue) => {
   // setSelectedCourseID(itemValue);
    // Optionally save the selected course ID using the presenter
   // presenter.saveCourseID(itemValue);
  };

  const handleNext = () => {
   // if (selectedCourseID) {
      // Navigate to the next screen if course ID is selected
      navigation.navigate('Preferences'); // Replace 'NextScreen' with your actual next screen's name
    //}
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>GROUP FINDER</Text>
      <Text style={styles.subHeader}>What is your course ID?</Text>
      <Picker
        selectedValue={selectedCourseID}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => handleCourseIDSelect(itemValue)}
        mode="dropdown" // Android only
      >
        <Picker.Item label="Select a course ID" value={null} />
        <Picker.Item label="ID221" value="ID221" />
        <Picker.Item label="ID2214" value="ID2214" />
        <Picker.Item label="ID2216" value="ID2216" />
        <Picker.Item label="ID2218" value="ID2218" />
        <Picker.Item label="ID2219" value="ID2219" />
      </Picker>
      <TouchableOpacity
        style={styles.button}
        onPress={handleNext}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      
      {/* Footer with 'Find group' and 'My Groups' buttons */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('FindGroup')} // Replace with your actual navigation call
        >
          <Text style={styles.footerButtonText}>Find group</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('MyGroups')} // Replace with your actual navigation call
        >
          <Text style={styles.footerButtonText}>My Groups</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#64b5f6",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 50, // Adjust this value to raise the picker and buttons up from the bottom
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
    width: 300,
    height: 44,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4caf50",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    borderRadius: 20,
    marginBottom: 20, // Add space between button and footer
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: '#333', // Match this with your app's footer background color
    padding: 10,
  },
  footerButton: {
    backgroundColor: '#4caf50', // Match this with your app's footer button color
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  footerButtonText: {
    color: '#ffffff', // Match this with your app's footer button text color
  },
});

export default CourseIDScreen;
