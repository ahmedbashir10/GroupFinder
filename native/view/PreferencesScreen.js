import React, { Keyboard,useState, useEffect } from "react";
import RNPickerSelect from "react-native-picker-select";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import PreferencesPresenter from "../presenter/PreferencesPresenter";

const PreferencesScreen = ({ navigation }) => {
  const [presenter, setPresenter] = useState(null);

  useEffect(() => {
    const prefPresenter = new PreferencesPresenter(navigation);
    setPresenter(prefPresenter);
  }, [navigation]);

  const [location, setLocation] = useState("remote");
  const [grade, setGrade] = useState("flexible");
  const [specificPreference, setSpecificPreference] = useState("");
  const [minSize, setMinSize] = useState("");
  const [maxSize, setMaxSize] = useState("");

  if (!presenter) {
    return null; 
  }

  const handleFindMatch = () => {
    presenter.savePreferences(
      location,
      grade,
      specificPreference,
      minSize,
      maxSize
    );
    presenter.handleFindMatch();
  };

  return (
    <View  style={styles.container} >
      <Text style={styles.header}>Preferences</Text>

      <Text style={styles.label}>Location preferences</Text>
      
      <RNPickerSelect
                //placeholder={{ label: "Select you favourite language", value: "Remote" }}
                onValueChange={(itemValue) => setLocation(itemValue)}
                items={[
                    { label: "Remote", value: "Remote" },
                    { label: "Real-life", value: "Real-life" },
                    { label: "Flexible", value: "Flexible" },
                ]}
                style={{
                  inputIOS: styles.inputIOS, // styles for iOS
                  inputAndroid: styles.inputAndroid,
                  //placeholder: styles.placeholder // styles for Android
                }}
        />


      <Text style={styles.label}>Grade preference</Text>
      <RNPickerSelect
          //placeholder={{ label: "Select you favourite language", value: "Remote" }}
          onValueChange={(itemValue) => setGrade(itemValue)}
          items={[
              { label: "Pass", value: "Pass" },
              { label: "Higher", value: "Higher" },
              { label: "Flexible", value: "Flexible" },
          ]}
          style={{
            inputIOS: styles.inputIOS, // styles for iOS
            inputAndroid: styles.inputAndroid,
            //placeholder: styles.placeholder // styles for Android
          }}
        />
      

      <Text style={styles.label}>Specific preferences</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g., Only English..."
        value={specificPreference}
        onChangeText={setSpecificPreference}
        multiline // Allows input to span multiple lines
        numberOfLines={4} // Adjust the number of lines as needed
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#84b5f0",
    alignItems: "center",
    justifyContent: "center",
    
    padding: 20,
  },
  header: {
    fontSize: 28,
    color: "#ffffff",
    marginBottom: 30,
  },
  label: {
    alignSelf: "center",
    color: "#ffffff",
    marginBottom: 10,
  },
  picker: {
    flex: 1,
    width: "80%", // Increase width to match other inputs
    backgroundColor: "#ffffff",
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputIOS: {
    fontSize: 14,
    backgroundColor: "#ffffff",
    width: "80%",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 12,

    color: 'black',
    paddingRight: 30,
    marginLeft: "10%",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    backgroundColor: "#ffffff",
    width: "80%",
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: 'black',
    paddingRight: 30,
    marginLeft: "10%",
    textAlign: 'center', // to ensure the text is never behind the icon
  },
  placeholder: {
    color: 'grey', // Color for placeholder text
    fontSize: 16,
    width: "80%",
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
  },
  input: {
    width: "80%", // Increase width to allow for longer inputs
    backgroundColor: "#ffffff",
    marginBottom: 20,
    paddingHorizontal: 10,
    height: 40, // Set a fixed height or adjust as needed
  },
  sizeInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%", // Match the width with other inputs for consistency
    marginBottom: 20, // Add margin-bottom for spacing from the next element
  },
  sizeInput: {
    width: "48%", // Adjust width to fit two inputs in one line
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    height: 40, // Set a fixed height or adjust as needed
    marginHorizontal: "1%", // Add horizontal margin for spacing
  },
  findMatchButton: {
    backgroundColor: "#4caf50",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "60%", // Increase width for better tap target
    borderRadius: 20,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "#f44336",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "60%", // Increase width for better tap target
    borderRadius: 20,
    marginBottom: 20, // Add margin-bottom for spacing from the bottom
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default PreferencesScreen;
