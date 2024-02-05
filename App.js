import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import WelcomeScreen from "./Welcome";
import EmailScreen from "./EmailScreen";
import CourseIDScreen from "./CourseID";
import PreferencesScreen from "./PreferencesScreen";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Welcome");

  const renderScreen = () => {
    switch (currentScreen) {
      case "Welcome":
        return <WelcomeScreen onNavigate={() => setCurrentScreen("Email")} />;
      case "Email":
        return <EmailScreen onNavigate={() => setCurrentScreen("CourseID")} />;
      case "CourseID":
        return (
          <CourseIDScreen
            onNavigate={() => setCurrentScreen("PreferencesScreen")}
          />
        );
      case "PreferencesScreen":
        return (
          <PreferencesScreen onNavigate={() => setCurrentScreen("Email")} />
        );
      // Add more cases for other screens
      default:
        return null;
    }
  };

  return <View style={styles.container}>{renderScreen()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
