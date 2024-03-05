import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CourseIDPresenter from "../presenter/CourseIDPresenter";

const CourseIDScreen = ({ navigation }) => {
  const [presenter, setPresenter] = useState(null);
  const [selectedCourseID, setSelectedCourseID] = useState("CourseID");
  const [inputValue, setInputValue] = useState("");
  const [courseIDs, setCourseIDs] = useState([
    "DT6299",
    "ZF8130",
    "QS4735",
    "UW4529",
    "YF6089",
    "IV3280",
    "ZB2352",
    "JL7763",
    "XO3659",
    "ZY9412",
    "BR4626",
    "SR6376",
    "GG9175",
    "CB8623",
    "YR6492",
    "NL4550",
    "VI5670",
    "CV8377",
    "MM6536",
    "FR6213",
    "RV5551",
    "UC4277",
    "YW5851",
    "EJ2891",
    "YR7676",
    "OT2318",
    "FS3152",
    "VZ3545",
    "RR3978",
    "QN8994",
    "HN1065",
    "EE8804",
    "BH9830",
    "TP9646",
    "VV2111",
    "TH5161",
    "LK4505",
    "ZP7649",
    "ZQ6114",
    "BG2744",
    "TE5004",
    "CT6418",
    "JR9160",
    "LE8657",
    "DL9915",
    "PP1894",
    "FS4028",
    "YF6695",
    "NS9373",
    "VS7497",
    "ID2214",
    "ID2216",
    "ID2218",
    "ID2219",
  ]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const courseIDPresenter = new CourseIDPresenter(navigation);
    setPresenter(courseIDPresenter);
  }, [navigation]);

  const handleInputChange = (text) => {
    setInputValue(text);
    const filtered = courseIDs.filter((courseID) =>
      courseID.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  const handleCourseSelect = (courseID) => {
    setInputValue(courseID);
    setFilteredCourses([]);
  };

  const suggestionContainerHeight = filteredCourses.length * 40;
  const maxContainerHeight = 200;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>GROUP FINDER</Text>
      <Text style={styles.subHeader}>What is your course ID?</Text>

      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleInputChange}
        placeholder="Type course ID"
      />
      {filteredCourses.length > 0 && (
        <View
          style={[
            styles.suggestionsContainer,
            { height: Math.min(suggestionContainerHeight, maxContainerHeight) },
          ]}
        >
          {filteredCourses.slice(0, 5).map((courseID, index) => (
            <TouchableOpacity
              key={index}
              style={styles.suggestionItem}
              onPress={() => handleCourseSelect(courseID)}
            >
              <Text>{courseID}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (inputValue) {
            presenter.saveCourseID(inputValue);
          } else {
            console.log("Please enter or select a course ID");
          }
        }}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.footerButton, styles.activeTab]}
          onPress={() => navigation.navigate("CourseID")}
        >
          <Text style={styles.footerButtonText}>Find group</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.footerButton]}
          onPress={() => navigation.navigate("MyGroup")}
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
    backgroundColor: "#84b5f0",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 50,
    position: "relative",
  },
  header: {
    top: "15%",
    position: "absolute",
    fontSize: 24,
    color: "#ffffff",
    marginBottom: 20,
  },
  subHeader: {
    position: "absolute",
    top: "15%",
    marginTop: 40,
    fontSize: 18,
    color: "#ffffff",
    marginBottom: 20,
  },
  input: {
    position: "absolute",
    height: 50,
    color: "#ffffff",
    top: "15%",
    width: "50%",
    marginTop: 80,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  suggestionsContainer: {
    position: "absolute",
    top: "15%",
    marginTop: 130,
    backgroundColor: "#fff",
    width: "50%",
    zIndex: 1,
  },
  suggestionItem: {
    height: 40,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  button: {
    position: "absolute",
    top: "15%",
    backgroundColor: "#4caf50",
    marginTop: 200,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: "30%",
    borderRadius: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
  },
  footer: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    borderTopColor: "gray",
    //borderTopWidth: 1,
    position: "absolute",
    bottom: 0,
  },
  footerButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6a7ba2",
  },
  activeTab: {
    backgroundColor: "#8a9bb2",
  },
  footerButtonText: {
    color: "white",
    fontSize: 14,
  },
});

export default CourseIDScreen;
